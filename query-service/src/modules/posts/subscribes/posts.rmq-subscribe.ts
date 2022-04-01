import { Injectable } from '@nestjs/common';
import { Post } from '@modules/posts/entities/post.entity';
import { SavePostService } from '@modules/posts/services/save-post.service';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PostsRmqSubscribe {
  constructor(private savePostsService: SavePostService) {}

  @RabbitRPC({
    exchange: RMQ_EXCHANGE,
    queue: 'SavePostsQueryService',
    routingKey: 'PostCreated',
  })
  async postCreated(post: Post) {
    await this.savePostsService.execute(post);
  }
}
