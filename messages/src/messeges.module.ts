import { Module } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { MessagesRepository } from './messages/messages.repository';
import { MessagesService } from './messages/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]
})
export class MessegesModule { }
