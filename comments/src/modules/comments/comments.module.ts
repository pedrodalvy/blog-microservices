import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@modules/comments/entities/comment.entity';
import { CreateCommentService } from '@modules/comments/services/create-comment.service';
import { CommentsController } from '@modules/comments/controllers/comments.controller';
import { FindCommentsByPostService } from '@modules/comments/services/find-comments-by-post.service';
import { CommentsRmqSubscribe } from '@modules/comments/subscribes/comments.rmq-subscribe';
import { UpdateCommentService } from '@modules/comments/services/update-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [
    CreateCommentService,
    UpdateCommentService,
    FindCommentsByPostService,
    CommentsRmqSubscribe,
  ],
})
export class CommentsModule {}
