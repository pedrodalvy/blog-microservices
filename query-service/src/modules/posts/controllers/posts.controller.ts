import { Controller, Get } from '@nestjs/common';
import { SavePostService } from '@modules/posts/services/save-post.service';
import { Post } from '@modules/posts/entities/post.entity';
import { GetPostsWithCommentsService } from '@modules/posts/services/get-posts-with-comments.service';

@Controller('posts')
export class PostsController {
  constructor(
    private savePostService: SavePostService,
    private getPostsWithCommentsService: GetPostsWithCommentsService,
  ) {}

  @Get()
  getPosts(): Promise<Post[]> {
    return this.getPostsWithCommentsService.execute();
  }
}
