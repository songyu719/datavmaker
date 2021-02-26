import axios, { AxiosRequestConfig } from "axios";
import config from "@/utils/config";
// import { user } from "models";
import { ModalShow, MessageShow } from "@/utils/modal";
// import storage, { StorageKey } from "utils/storage";

const service = axios.create({
  timeout: 15 * 1000,
  baseURL: config.baseApi
});

service.interceptors.request.use(
  conf => {
    // 权限认证
    // let tokenObj: LoginDto | null = null;
    // if (storage.get(StorageKey.token)) {
    //   tokenObj = JSON.parse(storage.get(StorageKey.token) as string);
    //   const tokenExp = JSON.parse(
    //     Base64.decode(tokenObj!.accessToken!.split(".")[1])
    //   ).exp;
    //   // 判断token是否过期
    //   const timestamp = +new Date();
    //   if (tokenExp && timestamp >= parseInt(tokenExp + "000")) {
    //     user.refreshToken();
    //   }
    // }
    if (
      (conf.url as string).indexOf("http://") >= 0 ||
      (conf.url as string).indexOf("https://") >= 0
    ) {
      conf.baseURL = "";
    }
    // if (tokenObj && tokenObj!.accessToken) {
    //   conf.headers["Authorization"] = `Bearer ${tokenObj!.accessToken}`; // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    // 获取当前登录机构及用户信息
    // const organs = JSON.parse(
    //   storage.get(StorageKey.organs)
    //     ? (storage.get(StorageKey.organs) as string)
    //     : "[]"
    // );
    // const organId = organs.length > 0 ? organs[0].organId : "";
    // const loginInfo = JSON.parse(
    //   storage.get(StorageKey.loginInfo)
    //     ? (storage.get(StorageKey.loginInfo) as string)
    //     : "{}"
    // );

    // if (conf.method) {
    //   const rType = conf.data ? "body" : conf.params ? "params" : "";
    //   const data = conf.data
    //     ? { ...conf.data }
    //     : conf.params
    //     ? { ...conf.params }
    //     : {};
    //   data["currentOrganId"] = organId;
    //   data["currentEmployeeId"] = loginInfo.employeeId || "";
    //   data["currentEmployee"] = loginInfo.employee || "";
    //   if (rType === "body") {
    //     conf.data = data || {};
    //   } else if (rType === "params") {
    //     conf.params = data || {};
    //   }
    // }
    return conf;
  },
  err => {
    return Promise.reject(err);
  }
);
service.interceptors.response.use(
  resp => {
    const res = resp.data as IResponse<any> | any;
    if (res.code === 200 || resp.status === 200) {
      return resp.data;
    } else {
      MessageShow({
        type: "error",
        content: res.message || "请求数据失败，可能是网络连接异常"
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        ModalShow({
          type: "confirm",
          title: "确定登出？",
          content: "你已被登出，可以取消继续留在该页面，或者重新登录",
          okText: "重新登录",
          cancelText: "取消",
          // ok: () => {
          //   user.logout(() => {
          //     setTimeout(() => {
          //       location.reload();
          //     }, 1000);
          //   });
          // }
        });
      }
      return Promise.reject(resp);
    }
  },
  error => {
    // return Promise.reject(err);
    console.log("@response error", error);
    let msg = "请求数据失败，可能是网络连接异常";
    if (error && error.response) {
      const _data = error.response.data;
      msg = _data.message ? _data.message : msg;
      // switch (error.response.status) {
      //   case 400:
      //     msg = '错误请求'
      //     break
      //   case 401:
      //     msg = '未授权，请重新登录'
      //     break
      //   case 403:
      //     msg = '拒绝访问'
      //     break
      //   case 404:
      //     msg = '请求错误,未找到该资源'
      //     break
      //   case 405:
      //     msg = '请求方法未允许'
      //     break
      //   case 408:
      //     msg = '请求超时'
      //     break
      //   case 500:
      //     msg = '服务器端出错'
      //     break
      //   case 501:
      //     msg = '网络未实现'
      //     break
      //   case 502:
      //     msg = '网络错误'
      //     break
      //   case 503:
      //     msg = '服务不可用'
      //     break
      //   case 504:
      //     msg = '网络超时'
      //     break
      //   case 505:
      //     msg = 'http版本不支持该请求'
      //     break
      //   default:
      //     msg = `连接错误${error.response.status}`
      // }
    }
    MessageShow({
      type: "error",
      content: msg
    });

    // 前往登录页面
    // if (
    //   ["用户已经在其他地方登录", "用户未登陆或登陆已过期"].indexOf(msg) >= 0
    // ) {
    //   user.logout(() => {
    //     setTimeout(() => {
    //       location.reload();
    //     }, 1000);
    //   });
    // }

    return Promise.reject(error);
  }
);

export interface IResponse<T> {
  code?: number;
  message?: string;
  data: T;
}

export interface RequestOptions {
  disableMessage?: boolean; // 是否禁用默认提示
  moduleName?: string; // 对应本地模块名称
  methodName?: string; // 对应本地模块方法名称
}

export interface Config extends AxiosRequestConfig {
  options?: RequestOptions; // 自定义数据
  processData?: boolean;
}

export type ApiPromise<T = any> = Promise<IResponse<T>>;

interface MyRequest<T = any> {
  <T = any>(config: Config): ApiPromise<T>;

  setOptions: (
    options?: RequestOptions
  ) => <T = any>(config: Config) => ApiPromise<T>;
}

const request = <T>(config: Config, options?: RequestOptions) => {
  config.options = options || {};
  const api = (service(config) as unknown) as ApiPromise<T>;
  return api;
};
const myRequest: MyRequest = (request as unknown) as MyRequest;

myRequest.setOptions = (options?: RequestOptions) => {
  return (config: Config) => {
    return request(config, options);
  };
};
export default myRequest;
