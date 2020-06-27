import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {
    
   }

   getAllTodos(username){
    return this.httpClient.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);
 }
 
 deleteTodo(username,id){
  return this.httpClient.delete(`http://localhost:8090/users/${username}/todos/${id}`);
}

getTodo(username,id){
  return this.httpClient.get<Todo>(`http://localhost:8090/users/${username}/todos/${id}`);
}

updateTodo(username,id, todo){
  return this.httpClient.put<Todo>(`http://localhost:8090/users/${username}/todos/${id}`,todo);
}

createTodo(username, todo){
  return this.httpClient.post(`http://localhost:8090/users/${username}/todos`,todo);
}
}
