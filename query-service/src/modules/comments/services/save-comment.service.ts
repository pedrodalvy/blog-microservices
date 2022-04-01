import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaveCommentService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>,
  ) {}

  execute(comment: Comment): Promise<Comment> {
    return this.repository.save(comment);
  }
}
