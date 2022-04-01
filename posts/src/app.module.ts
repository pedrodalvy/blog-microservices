import { Module } from '@nestjs/common';
import { PostsModule } from '@modules/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RmqConnectionModule } from '@modules/rmq-connection/rmq-connection.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RmqConnectionModule, PostsModule],
})
export class AppModule {}
