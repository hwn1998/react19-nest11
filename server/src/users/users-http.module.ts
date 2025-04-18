
/**
 * 用户HTTP模块 - 用户相关功能的HTTP接口模块
 * 主要职责：
 * - 组织用户相关的HTTP接口依赖
 * - 提供用户服务的依赖注入
 * - 可扩展为独立的HTTP接口模块
 */
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
// import { UsersController } from './users.controller';

@Module({
  imports: [
    UsersModule, // 导入用户核心功能模块
  ],
  providers: [
    UsersService, // 提供用户服务
  ],
  // 可取消注释以添加用户控制器
  // controllers: [UsersController]
})
export class UserHttpModule {}
