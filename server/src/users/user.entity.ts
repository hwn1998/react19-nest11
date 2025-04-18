// 实体文件
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';
@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  username: string;
  
  @Column()
  password: string;
}