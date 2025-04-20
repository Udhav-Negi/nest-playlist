import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT);
  console.log(process.env.LOGGING)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

