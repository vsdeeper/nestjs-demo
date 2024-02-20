import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

@Module({
  imports: [TypeOrmModule.forRoot(config), TodolistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
