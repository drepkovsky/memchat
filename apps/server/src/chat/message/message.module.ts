import { MessageResolver } from '#app/chat/message/message.resolver';
import { MessageService } from '#app/chat/message/message.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [MessageResolver, MessageService],
})
export class MessageModule {}
