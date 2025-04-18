/**
 * 应用核心服务
 * 提供基础业务逻辑和数据处理
 * 通过@Injectable装饰器声明为可注入服务
 */
import { Injectable } from '@nestjs/common';

@Injectable() // 标识为可注入的NestJS服务
export class AppService {
  /**
   * 获取欢迎信息
   * @returns 返回欢迎字符串
   * @description 基础示例方法，返回固定的欢迎信息
   */
  getHello(): string {
    // 返回预设的欢迎信息
    return 'Hello World!';
  }
}
