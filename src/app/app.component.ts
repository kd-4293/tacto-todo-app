import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  public newTodo: ToDo = new ToDo()

  todosList: ToDo[] = [];
  editTodos: ToDo[] = [];
  title = 'app';

  ngOnInit(): void {
    
  }


  create() {
        if(this.newTodo.task){
          this.todosList.push(this.newTodo);
          this.newTodo = new ToDo()
        }
        
  }

  editTodo(todo: ToDo) {
    console.log(todo)
    if(this.todosList.includes(todo)){
      if(!this.editTodos.includes(todo)){
        this.editTodos.push(todo)
      }else{
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
       
      }
    }
  }

  doneTodo(todo:ToDo){
    todo.status = 'Done'
    
  }

  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }

  deleteTodo(todo: ToDo) {
    this.todosList.splice(this.todosList.indexOf(todo), 1);
  }

}
