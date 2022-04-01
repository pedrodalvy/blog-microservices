import { Global, Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rmqConnection } from 'src/config/rmq.config';

const connection = RabbitMQModule.forRoot(RabbitMQModule, rmqConnection);

@Global()
@Module({
  imports: [connection],
  exports: [connection],
})
export class RmqConnectionModule {}
