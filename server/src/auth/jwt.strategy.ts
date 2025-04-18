/**
 * JWT认证策略 - 实现基于JWT的身份验证
 * 继承Passport的Strategy类，处理JWT认证逻辑
 * 主要功能：
 * - 从请求头提取JWT令牌
 * - 验证令牌有效性
 * - 解析并返回用户信息
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 从Authorization头提取Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 不忽略过期检查
      ignoreExpiration: false,
      // 密钥(生产环境应使用环境变量)
      secretOrKey: 'jwt-hwn', 
    });
  }

  /**
   * 验证并解析JWT payload
   * @param payload 解码后的JWT内容
   * @returns 包含用户信息的对象
   * 注意：返回的对象将被附加到请求对象(req.user)
   */
  async validate(payload: any) {
    return { 
      userId: payload.sub, // 用户ID
      username: payload.username // 用户名
    };
  }
}