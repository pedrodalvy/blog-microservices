import { CommentStatusEnum } from '@modules/comments/enums/comment-status.enum';

export class CommentDto {
  id: string;
  content: string;
  postId: string;
  status: CommentStatusEnum;
}
