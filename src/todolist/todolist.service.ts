import { HttpException, Injectable } from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolist } from './entities/todolist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(Todolist)
    private todolist: Repository<Todolist>,
  ) {}
  async create(createTodolistDto: CreateTodolistDto) {
    const { name } = createTodolistDto;
    if (!name) throw new HttpException('名称为必填项', 200);
    const find = await this.todolist.findOneBy({ name });
    if (find) throw new HttpException('该名称已存在', 200);
    const res = await this.todolist.save(createTodolistDto);
    return res;
  }

  findAll() {
    return `This action returns all todolist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todolist`;
  }

  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return `This action updates a #${id} todolist`;
  }

  remove(id: number) {
    return `This action removes a #${id} todolist`;
  }
}
