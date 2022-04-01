import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '@modules/posts/entities/post.entity';

@Injectable()
export class SavePostService {
  constructor(@InjectRepository(Post) readonly repository: Repository<Post>) {}

  async execute(post: Post): Promise<Post> {
    return this.repository.save(post);
  }
}
