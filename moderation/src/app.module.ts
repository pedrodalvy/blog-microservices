import { Module } from '@nestjs/common';
import { RmqConnectionModule } from '@modules/rmq-connection/rmq-connection.module';
import { CommentsModule } from '@modules/comments/comments.module';

@Module({
  imports: [RmqConnectionModule, CommentsModule],
})
export class AppModule {}
