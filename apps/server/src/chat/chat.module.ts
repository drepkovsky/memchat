import { ChatResolver } from '#app/chat/chat.resolver';
import { ChatService } from '#app/chat/chat.service';
import { MessageModule } from '#app/chat/message/message.module';
import { Module } from '@nestjs/common';

@Module({
  providers: [ChatResolver, ChatService],
  imports: [MessageModule],
})
export class ChatModule {}
