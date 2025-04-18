/**
 * 用户控制器 - 处理用户相关HTTP请求
 * 提供用户注册、登录等核心功能接口
 * 路由基础路径：/users
 */
import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// Swagger文档标签
@ApiTags('users')  
// 定义控制器基础路由路径
@Controller('users')
export class UsersController {
  // 注入用户服务
  constructor(private readonly usersService: UsersService) {}

  /**
   * 用户注册接口
   * POST /users/register
   * @param body 请求体，包含用户名和密码
   * @returns 注册成功的用户信息
   */
  @Post('register')
  async register(@Body() body: { username: string, password: string }) {
    return this.usersService.create(body.username, body.password);
  }

  /**
   * 用户登录接口
   * POST /users/login
   * @param body 请求体，包含用户名和密码
   * @returns 登录成功的用户信息(不包含密码)
   * @throws 当用户名或密码错误时抛出"Invalid credentials"错误
   */
  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const user = await this.usersService.validateUser(body.username, body.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}