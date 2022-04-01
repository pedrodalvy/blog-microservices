import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  title: string;
}
