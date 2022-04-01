import { Module } from '@nestjs/common';
import { ModerateCommentContentService } from '@modules/comments/services/moderate-comment-content.service';
import { CommentsRmqSubscribe } from '@modules/comments/subscribes/comments.rmq-subscribe';

@Module({
  providers: [ModerateCommentContentService, CommentsRmqSubscribe],
})
export class CommentsModule {}
