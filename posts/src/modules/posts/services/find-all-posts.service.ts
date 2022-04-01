import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '@modules/posts/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllPostsService {
  constructor(@InjectRepository(Post) readonly repository: Repository<Post>) {}

  async execute(): Promise<Post[]> {
    return this.repository.find();
  }
}
