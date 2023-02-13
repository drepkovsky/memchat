import { AuthResolver } from '#app/auth/auth.resolver';
import { AuthService } from '#app/auth/auth.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
