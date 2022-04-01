import { CreateCommentService } from '@modules/comments/services/create-comment.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentInput } from '@modules/comments/dto/create-comment.input';
import { Comment } from '@modules/comments/entities/comment.entity';
import { FindCommentsByPostService } from '@modules/comments/services/find-comments-by-post.service';

@Controller()
export class CommentsController {
  constructor(
    private createCommentService: CreateCommentService,
    private findCommentsByPostService: FindCommentsByPostService,
  ) {}

  @Post('posts/:postId/comments')
  create(
    @Body() body: CreateCommentInput,
    @Param('postId') postId: string,
  ): Promise<Comment> {
    return this.createCommentService.execute({ content: body.content, postId });
  }

  @Get('posts/:postId/comments')
  findManyByPosts(@Param('postId') postId: string): Promise<Comment[]> {
    return this.findCommentsByPostService.execute(postId);
  }
}
