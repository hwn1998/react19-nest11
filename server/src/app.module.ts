import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// mysql关键命令

// 启动服务
// net start mysql 

// 登录mysql
// mysql -u root -p
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库主机
      port: 3306, // 数据库端口
      username: 'root', // 数据库用户名
      password: 'hwn19980502@', // 数据库密码
      database: 'hwn', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件路径
      synchronize: true, // 是否自动同步实体到数据库，设置 synchronize: true 不应在生产中使用 - 否则你可能会丢失生产数据。
      autoLoadEntities: true, // 自动加载实体
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
