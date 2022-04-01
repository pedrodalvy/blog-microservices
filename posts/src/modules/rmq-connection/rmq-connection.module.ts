import { Global, Module } from '@nestjs/common';
import { rmqConnection } from 'src/config/rmq.config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

@Global()
@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rmqConnection)],
  providers: [SendMessageToRqmService],
  exports: [SendMessageToRqmService],
})
export class RmqConnectionModule {}
