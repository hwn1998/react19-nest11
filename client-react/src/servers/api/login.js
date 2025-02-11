import { get, post } from "./../index.js";

/**
 * 向服务器发送注册请求
 *
 * @param body 请求体内容
 * @returns 发送请求的结果
 */
export const registry = (body) => {
  return post("/registry", body);
};

/**
 * 向服务器发送登录请求
 *
 * @param body 请求体内容
 * @returns 发送请求的结果
 */
export const login = (body) => {
    return post("/login", body);
  };