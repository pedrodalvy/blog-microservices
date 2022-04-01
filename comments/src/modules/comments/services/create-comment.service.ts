import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { CommentStatusEnum } from '@modules/comments/enums/comment-status.enum';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

type ServiceProps = {
  content: string;
  postId: string;
};

@Injectable()
export class CreateCommentService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>,
    readonly sendMessageToRqm: SendMessageToRqmService,
  ) {}

  async execute({ content, postId }: ServiceProps): Promise<Comment> {
    const status = CommentStatusEnum.PENDING;

    const comment = await this.repository.save({
      content,
      postId,
      status,
    });

    this.sendMessageToRqm.execute('CommentCreated', comment);

    return comment;
  }
}
