import { message, Modal } from "ant-design-vue";
function getPopupContainer() {
  const app = document.getElementById("app");
  if (app) {
    return app;
  } else {
    return document.body;
  }
}
//  弹框提示
export function ModalShow(data: IModal) {
  const { type, title, content } = data;
  if (type === "confirm") {
    (Modal as any).confirm({
      title,
      content,
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  } else if (type === "success") {
    (Modal as any).success({
      title,
      content,
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  } else if (type === "error") {
    (Modal as any).error({
      title,
      content,
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  } else if (type === "warning") {
    (Modal as any).warning({
      title,
      content,
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  } else if (type === "info") {
    (Modal as any).info({
      title,
      content,
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  } else if (type === "lodopMsg") {
    (Modal as any).info({
      title,
      content: (h: any) => [
        h("span", null, "Web打印服务CLodop未安装启动，点击这里"),
        h("a", { attrs: { href: content } }, "下载执行安装"),
        h("span", null, "，成功后请刷新本页面。")
      ],
      okText: data.okText || "确认",
      cancelText: data.cancelText || "取消",
      keyboard: data.keyboard || false,
      onOk: data.ok,
      onCancel: data.cancel,
      getContainer: getPopupContainer()
    });
  }
}
//  全局提示
export function MessageShow(data: IMessage) {
  (message as any).config({
    getContainer: () => {
      const app = document.getElementById("app");
      if (app) {
        return app;
      } else {
        return document.body;
      }
    }
  });
  const { content } = data;
  if (data.type === "error") {
    (message as any).error({
      content,
      duration: data.duration || 3
    });
  } else if (data.type === "success") {
    (message as any).success({
      content,
      duration: data.duration || 3
    });
  } else if (data.type === "warning") {
    (message as any).warning({
      content,
      duration: data.duration || 3
    });
  } else if (data.type === "info") {
    (message as any).info({
      content,
      duration: data.duration || 3
    });
  }
}

interface IModal {
  type: string;
  title: string;
  content: any;
  okText?: string;
  cancelText?: string;
  keyboard?: boolean;
  ok?: any;
  cancel?: any;
}
interface IMessage {
  type: string;
  content: string | any;
  duration?: number;
}
