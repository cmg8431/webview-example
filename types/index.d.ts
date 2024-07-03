export {};

declare global {
  interface Window {
    JavaScriptChannel: any;
    ReactNativeWebView: ReactNativeWebView;
    myMessage: any;
  }
}
