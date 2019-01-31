import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }

  remove(id: string) {
    this.todos.filter(todo => todo.id !== id);
  }
}
