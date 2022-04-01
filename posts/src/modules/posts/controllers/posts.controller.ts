import { Body, Controller, Get, Post } from '@nestjs/common';
import { FindAllPostsService } from '@modules/posts/services/find-all-posts.service';
import { CreatePostService } from '@modules/posts/services/create-post.service';
import { CreatePostInput } from '@modules/posts/dto/create-post.input';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly findAllPostsService: FindAllPostsService,
    private readonly createPostService: CreatePostService,
  ) {}

  @Get()
  findAll() {
    return this.findAllPostsService.execute();
  }

  @Post()
  create(@Body() body: CreatePostInput) {
    return this.createPostService.execute(body);
  }
}
