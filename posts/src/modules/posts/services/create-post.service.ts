import { Injectable } from '@nestjs/common';
import { CreatePostInput } from '@modules/posts/dto/create-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '@modules/posts/entities/post.entity';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

@Injectable()
export class CreatePostService {
  constructor(
    @InjectRepository(Post) readonly repository: Repository<Post>,
    readonly sendMessageToRqm: SendMessageToRqmService,
  ) {}

  async execute({ title }: CreatePostInput): Promise<Post> {
    const post = await this.repository.save({ title });

    this.sendMessageToRqm.execute('PostCreated', post);

    return post;
  }
}
