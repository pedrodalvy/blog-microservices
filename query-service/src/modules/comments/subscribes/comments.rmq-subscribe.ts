import { Injectable } from '@nestjs/common';
import { SaveCommentService } from '@modules/comments/services/save-comment.service';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { Comment } from '@modules/comments/entities/comment.entity';

@Injectable()
export class CommentsRmqSubscribe {
  constructor(private saveCommentService: SaveCommentService) {}

  @RabbitRPC({
    exchange: RMQ_EXCHANGE,
    queue: 'SaveCommentsQueryService',
    routingKey: ['CommentCreated', 'CommentUpdated'],
  })
  async commentCreated(comment: Comment) {
    await this.saveCommentService.execute(comment);
  }
}
