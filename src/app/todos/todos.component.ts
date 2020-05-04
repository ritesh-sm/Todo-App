import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos()
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo);
  }

  deleteTodo(todoText){
    for(let i=0; i<this.todos.length; i++){
      if(todoText == (this.todos[i].text)){
        this.todos.splice(i,1);
        this._todoService.removeTodo(this.todos);
      }
    }
  }

  editTodo(todoText){
    console.log("Editing :" + todoText.text)
    this.oldText = todoText.text
    this.appState = 'edit';
    this.text = todoText.text
  }

  updateTodo(){
    for(let i=0; i<this.todos.length; i++){
      if(this.oldText == (this.todos[i].text)){
        this.todos[i].text = this.text
      }
    }
    this._todoService.updateTodo(this.todos)
  }

}
