/**
 * 应用核心控制器
 * 处理根路由请求和基础服务调用
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 控制器装饰器，不指定路径则默认为根路径/
@Controller()
export class AppController {
  /**
   * 构造函数注入应用服务
   * @param appService 应用服务实例
   */
  constructor(private readonly appService: AppService) {}

  /**
   * 根路由GET请求处理
   * @returns 返回欢迎字符串
   * @route GET /
   */
  @Get() // 映射HTTP GET请求
  getHello(): string {
    // 调用服务层获取欢迎信息
    return this.appService.getHello();
  }
}
