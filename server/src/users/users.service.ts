
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  private readonly users: User[] = [];
 
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
 
  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = { id: Date.now().toString(), username, password: hashedPassword };
    this.users.push(user);
    return user;
  }
 
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
