import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@modules/posts/entities/post.entity';
import { SavePostService } from '@modules/posts/services/save-post.service';
import { PostsController } from '@modules/posts/controllers/posts.controller';
import { GetPostsWithCommentsService } from '@modules/posts/services/get-posts-with-comments.service';
import { PostsRmqSubscribe } from '@modules/posts/subscribes/posts.rmq-subscribe';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [SavePostService, GetPostsWithCommentsService, PostsRmqSubscribe],
  controllers: [PostsController],
})
export class PostsModule {}
