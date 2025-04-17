import { NestFactory } from '@nestjs/core';
import { RootModule } from './app.module';
import { NextFunction } from 'express';



async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

