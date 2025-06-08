import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from '@repo/types';
import { TodosService } from './todos.service';

@Controller('todos')  
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
}
