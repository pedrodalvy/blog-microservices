import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from '@modules/posts/posts.module';
import { CommentsModule } from '@modules/comments/comments.module';
import { RmqConnectionModule } from '@modules/rmq-connection/rmq-connection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RmqConnectionModule,
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}
