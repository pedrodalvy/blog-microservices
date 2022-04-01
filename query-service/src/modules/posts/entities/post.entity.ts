import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
