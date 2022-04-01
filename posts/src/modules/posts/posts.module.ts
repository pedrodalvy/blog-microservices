import { Module } from '@nestjs/common';
import { PostsController } from '@modules/posts/controllers/posts.controller';
import { FindAllPostsService } from '@modules/posts/services/find-all-posts.service';
import { CreatePostService } from '@modules/posts/services/create-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@modules/posts/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [FindAllPostsService, CreatePostService],
})
export class PostsModule {}
