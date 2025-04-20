import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true, // it means the configuration being set can be used throughout the module
    envFilePath : ".local.env", // if we do not provide the file in envFilePath then it will take the .env file from root of the project 
    // envFilePath : ".prod.env" // if we do not provide the file envFilePath then it will take the .env file from root of the project 
  }), 
  UserModule
],
  controllers: [AppController],
  providers: [],
  exports: []
})

export class AppModule {
  
}
