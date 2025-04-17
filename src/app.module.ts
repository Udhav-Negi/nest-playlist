import { Module } from '@nestjs/common';
import { AppController } from './app.controller';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
  exports: []
})

export class RootModule {
  constructor()
  {
    console.log('App Module')
  }
}
