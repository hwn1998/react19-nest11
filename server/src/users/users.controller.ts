// 实现用户控制器

import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { username: string, password: string }) {
    return this.usersService.create(body.username, body.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }
}