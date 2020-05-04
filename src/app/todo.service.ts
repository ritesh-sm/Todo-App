import { Injectable } from '@angular/core';
import {Init} from "./init-todos";

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log("Todo service initialized...")
    this.load()
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    //Add New Todo
    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  removeTodo(newTodos){
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  updateTodo(newTodos){
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
}
