import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiurl = 'api/todolist';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiurl);
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Todo>(url);
  }

  updatetodo(todo: Todo): Observable<any> {
    return this.http.put(this.apiurl, todo, this.httpOptions);
  }

  deletetodo(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiurl, newTodo, this.httpOptions);
  }
}
