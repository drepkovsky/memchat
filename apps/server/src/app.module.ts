import { AppController } from '#app/app.controller';
import { AppService } from '#app/app.service';
import { AuthModule } from '#app/auth/auth.module';
import { ChatModule } from '#app/chat/chat.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ChatModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
