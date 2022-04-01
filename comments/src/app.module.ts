import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from '@modules/comments/comments.module';
import { RmqConnectionModule } from '@modules/rmq-connection/rmq-connection.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CommentsModule, RmqConnectionModule],
})
export class AppModule {}
