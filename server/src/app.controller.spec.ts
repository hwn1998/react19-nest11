/**
 * AppController 单元测试
 * 测试控制器的基础功能和返回值
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 描述测试套件
describe('AppController', () => {
  let appController: AppController;

  // 每个测试用例前的准备工作
  beforeEach(async () => {
    // 创建测试模块
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // 注册要测试的控制器
      providers: [AppService],      // 注册依赖的服务
    }).compile();

    // 获取控制器实例
    appController = app.get<AppController>(AppController);
  });

  // 测试根路由
  describe('root', () => {
    // 测试getHello方法
    it('应该返回 "Hello World!"', () => {
      // 验证控制器返回的字符串是否符合预期
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
