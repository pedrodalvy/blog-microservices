import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { SaveCommentService } from '@modules/comments/services/save-comment.service';
import { CommentsRmqSubscribe } from '@modules/comments/subscribes/comments.rmq-subscribe';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [SaveCommentService, CommentsRmqSubscribe],
})
export class CommentsModule {}
