import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/app/shared/models/todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}


  listTodos(): Promise<Todo[]> {
    const user = this.userService.getCurrentUser();
    if (!user) {
      throw new Error('not connected');
    }

    return this.http.get<Todo[]>(API_URL + '/?userId=' + user.id).toPromise();
  }


  create(todo: Todo) {
    this.http.post(API_URL, todo, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=UTF-8')
        //.set('Authorization', '')
    })
  }

}
