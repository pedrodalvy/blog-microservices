import { Injectable } from '@nestjs/common';
import { RMQ_EXCHANGE } from 'src/config/rmq.config';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class SendMessageToRqmService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async execute(routingKey: string, message: any): Promise<void> {
    await this.amqpConnection.publish(RMQ_EXCHANGE, routingKey, message);
  }
}
