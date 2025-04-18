/**
 * 应用入口文件
 * 负责初始化并启动NestJS应用
 * 配置应用监听的端口和环境变量
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 应用启动函数
 * 1. 创建NestJS应用实例
 * 2. 启动HTTP服务监听指定端口
 */
async function bootstrap() {
  // 创建应用实例(使用根模块AppModule)
  const app = await NestFactory.create(AppModule);
  
  // 启动应用，监听端口(优先使用环境变量PORT，默认8000)
  await app.listen(process.env.PORT ?? 8000);
}

// 执行启动函数
bootstrap();
