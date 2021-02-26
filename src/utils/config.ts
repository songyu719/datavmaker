/* eslint-disable */
declare global {
  interface Window {
    _baseApi: string;
    _basicsApi: string;
    _baseHost: string;
    _uploadApi: string;
    _version: string;
    _appLink: string;
  }
}
// 10.4.1.62
class Config {
  baseApi = "http://10.4.1.248:20120";
  basicsApi = "http://10.4.1.248:20200";
  baseHost = "http://localhost:9529";
  uploadApi = "http://10.4.1.248:20500";
  version = "v1.0.1";
  appLink='http://10.3.1.55:9999/mobile.html';
}
const config = new Config();

config.baseApi = window._baseApi ? window._baseApi : config.baseApi;
config.basicsApi = window._basicsApi ? window._basicsApi : config.basicsApi;
config.baseHost = window._baseHost ? window._baseHost : config.baseHost;
config.uploadApi = window._uploadApi ? window._uploadApi : config.uploadApi;
// 版本号
config.version = window._version ? window._version : config.version;
config.appLink = window._appLink ? window._appLink : config.appLink;

export default config;
