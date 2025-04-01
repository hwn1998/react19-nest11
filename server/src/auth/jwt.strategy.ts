// 创建 JWT 策略

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwt-hwn', // 请确保在生产环境中使用安全的密钥
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}