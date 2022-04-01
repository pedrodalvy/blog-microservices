import { Injectable } from '@nestjs/common';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Comment } from '@modules/comments/entities/comment.entity';
import { UpdateCommentService } from '@modules/comments/services/update-comment.service';

@Injectable()
export class CommentsRmqSubscribe {
  constructor(private updateCommentService: UpdateCommentService) {}

  @RabbitRPC({
    exchange: RMQ_EXCHANGE,
    queue: 'CommentModeratedCommentsService',
    routingKey: 'CommentModerated',
  })
  async commentCreated(comment: Comment) {
    await this.updateCommentService.execute(comment.id, {
      status: comment.status,
    });
  }
}
