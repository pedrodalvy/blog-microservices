import { Global, Module } from '@nestjs/common';
import { rmqConnection } from 'src/config/rmq.config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { SendMessageToRqmService } from '@modules/rmq-connection/services/send-message-to-rqm.service';

const connection = RabbitMQModule.forRoot(RabbitMQModule, rmqConnection);

@Global()
@Module({
  imports: [connection],
  providers: [SendMessageToRqmService],
  exports: [connection, SendMessageToRqmService],
})
export class RmqConnectionModule {}
