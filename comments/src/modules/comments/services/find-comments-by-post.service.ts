import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindCommentsByPostService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>,
  ) {}

  execute(postId: string): Promise<Comment[]> {
    return this.repository.find({ where: { postId } });
  }
}
