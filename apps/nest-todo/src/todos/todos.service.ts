import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '@repo/types';

export interface Todo extends CreateTodoDto {
  id: string;
}

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      ...createTodoDto,
      id: Math.random().toString(36).substring(2),  // unique id string
    };
    this.todos.push(todo);
    return todo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
