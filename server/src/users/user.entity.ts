/**
 * 用户实体 - 映射数据库用户表
 * 包含用户核心信息，用于身份认证和授权
 * 使用TypeORM装饰器定义表结构
 */
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity() // 标识为TypeORM实体
export class User {
  /**
   * 用户ID - 主键
   * @type {string}
   */
  @PrimaryGeneratedColumn() // 自增主键
  id: string;
  
  /**
   * 用户名 - 唯一标识
   * @type {string}
   */
  @Column() // 数据库列
  username: string;
  
  /**
   * 密码 - 加密存储
   * @type {string}
   */
  @Column() // 数据库列
  password: string;
  
  // 示例关联关系(已注释)
  // @OneToMany(() => Photo, photo => photo.user)
  // photos: Photo[];
}