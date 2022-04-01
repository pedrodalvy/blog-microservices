import { env } from 'process';
import * as dotenv from 'dotenv';
import { MessageHandlerErrorBehavior } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces';

dotenv.config();

export const RMQ_EXCHANGE = env.RMQ_EXCHANGE;

export const rmqConnection: RabbitMQConfig = {
  exchanges: [{ name: RMQ_EXCHANGE, type: 'topic' }],
  uri: env.RMQ_HOST,
  connectionInitOptions: { wait: false },
  defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.NACK,
};
