import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date){
  } 
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[];
  message:string;
//   listTodos = [
//   new Todo(1,'Learn to dance', false, new Date()),
//   new Todo( 2,'Learn to Write', false , new Date()),
//   new Todo(1,'Learn to Code', false, new Date()),
//   new Todo( 2,'Learn to debug', false , new Date()),
 
// ]
  constructor(private todosService: TodoDataService,
              private router:Router) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos(){
    this.todosService.getAllTodos('nayazjh').subscribe(
      response => {
        this.todos = response;
      }
    )
  }
  deleteTodo(id){
    this.todosService.deleteTodo('nayazjh',id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successfull!`; 
      }
    )
    this.getAllTodos();
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }
}
