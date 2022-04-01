import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { Repository } from 'typeorm';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

@Injectable()
export class UpdateCommentService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>,
    readonly sendMessageToRqm: SendMessageToRqmService,
  ) {}

  async execute(id: string, data: Partial<Comment>): Promise<Comment> {
    const comment = await this.repository.findOne(id);

    const updatedComment = await this.repository.save({
      ...comment,
      ...data,
    });

    this.sendMessageToRqm.execute('CommentUpdated', updatedComment);

    return updatedComment;
  }
}
