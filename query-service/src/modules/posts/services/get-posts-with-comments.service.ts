import { Injectable } from '@nestjs/common';
import { Post } from '@modules/posts/entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GetPostsWithCommentsService {
  constructor(@InjectRepository(Post) readonly repository: Repository<Post>) {}

  async execute(): Promise<Post[]> {
    return this.repository.find({
      relations: ['comments'],
    });
  }
}
