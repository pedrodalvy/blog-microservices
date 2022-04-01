import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  postId: string;

  @Column()
  status: string;
}
