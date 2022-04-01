import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentInput {
  @IsNotEmpty()
  @IsString()
  content: string;
}
