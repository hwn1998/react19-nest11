/**
 * 认证模块 - 处理应用的身份验证相关功能
 * 主要职责：
 * - 配置JWT认证
 * - 提供Passport策略
 * - 管理认证相关依赖
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    // 用户模块，提供用户验证服务
    UsersModule,
    // Passport模块，提供认证框架
    PassportModule,
    // JWT模块配置
    JwtModule.register({
      secret: 'jwn-hwn', // 密钥(生产环境应使用环境变量)
      signOptions: { expiresIn: '60m' }, // token有效期60分钟
    }),
  ],
  // 注册JWT策略
  providers: [JwtStrategy],
  // 导出认证相关模块
  exports: [JwtModule, PassportModule],
})
export class AuthModule {}