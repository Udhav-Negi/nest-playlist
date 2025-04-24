import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportLocalStrategy } from './startegies/local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PassportLocalStrategy],
})
export class AuthModule {}
