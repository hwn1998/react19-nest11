// 实体文件
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';
@Entity()

export class User {
  id: string;
  username: string;
  password: string;
}