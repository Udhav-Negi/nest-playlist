import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction } from 'express';


function globalMiddlewareOne(req : Request, res: Response, next : NextFunction) {
  console.log("This is the middleware number one")
  next();
}

function globalMiddlewareTwo(req : Request, res: Response, next : NextFunction) {
  console.log("This is the middleware number two")
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddlewareOne, globalMiddlewareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


