import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Router from "next/router";

const isApp = () => {
  let isApp = false;

  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    isApp = true;
  }

  return isApp;
};

// ReactNative Webview에 postMessage 요청
const sendRouterEvent = (path: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: path })
  );
};

// 뒤로가기 하는 경우
export const stackRouterBack = () => {
  if (isApp()) {
    sendRouterEvent("back");
  } else {
    Router.back();
  }
};

// push 하는 경우
export const stackRouterPush = (url: string) => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    Router.push(url);
  }
};
