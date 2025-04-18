
/**
 * 用户服务 - 处理用户相关业务逻辑
 * 核心功能：
 * - 用户管理(创建、查询)
 * - 用户认证(密码验证)
 * - 密码安全处理
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  // 内存用户存储(示例用，实际项目应使用数据库)
  private readonly users: User[] = [];

  /**
   * 根据用户名查找用户
   * @param username 要查找的用户名
   * @returns 用户对象或undefined
   */
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  /**
   * 创建新用户
   * @param username 用户名
   * @param password 明文密码(会自动加密)
   * @returns 创建的用户对象
   * @description 密码会使用bcrypt加密存储
   */
  async create(username: string, password: string): Promise<User> {
    // 使用bcrypt加密密码(盐值复杂度10)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = { 
      id: Date.now().toString(), // 临时ID生成方案
      username, 
      password: hashedPassword 
    };
    this.users.push(user);
    return user;
  }

  /**
   * 验证用户凭据
   * @param username 用户名
   * @param pass 明文密码
   * @returns 验证成功返回用户信息(不含密码)，失败返回null
   */
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    // 安全比较密码哈希
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user; // 移除密码字段
      return result;
    }
    return null;
  }
}
