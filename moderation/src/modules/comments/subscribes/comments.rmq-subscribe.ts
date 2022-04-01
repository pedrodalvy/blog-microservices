import { Injectable } from '@nestjs/common';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { CommentDto } from '@modules/comments/dto/comment.dto';
import { ModerateCommentContentService } from '@modules/comments/services/moderate-comment-content.service';

@Injectable()
export class CommentsRmqSubscribe {
  constructor(private moderateCommentContent: ModerateCommentContentService) {}

  @RabbitRPC({
    exchange: RMQ_EXCHANGE,
    queue: 'ModerateCommentsModerationService',
    routingKey: 'CommentCreated',
  })
  async commentCreated(comment: CommentDto) {
    await this.moderateCommentContent.execute(comment);
  }
}
