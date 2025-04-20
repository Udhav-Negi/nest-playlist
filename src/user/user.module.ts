import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [],
  controllers: [],
  exports: []
})

export class UserModule {
  constructor(private readonly configService : ConfigService) {
    console.log("This is from user module ", process.env.PORT)
    console.log("This is from user module", configService.get<boolean>("LOGGING"))
  }
}
