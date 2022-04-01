import { Injectable } from '@nestjs/common';
import { CommentStatusEnum } from '@modules/comments/enums/comment-status.enum';
import { CommentDto } from '@modules/comments/dto/comment.dto';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

@Injectable()
export class ModerateCommentContentService {
  constructor(readonly sendMessageToRqm: SendMessageToRqmService) {}

  async execute(comment: CommentDto): Promise<void> {
    const containsProfanity = comment.content.includes('shit');

    const status = containsProfanity
      ? CommentStatusEnum.REJECTED
      : CommentStatusEnum.APPROVED;

    this.sendMessageToRqm.execute('CommentModerated', { ...comment, status });
  }
}
