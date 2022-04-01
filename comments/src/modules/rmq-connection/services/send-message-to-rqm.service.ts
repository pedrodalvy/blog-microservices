import { Injectable } from '@nestjs/common';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class SendMessageToRqmService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  execute(routingKey: string, message: any): void {
    this.amqpConnection
      .publish(RMQ_EXCHANGE, routingKey, message)
      .catch(console.error);
  }
}
