import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todos',
  template: `
  <ul>
    <ng-container *ngFor="let item of items; trackBy: trackByFn">
      <li [routerLink]="[1]">
        {{ item | json }}
      </li>
    </ng-container>
  </ul>

  <h1>SELECTION</h1>
  <router-outlet></router-outlet>
  `
})
export class TodosComponent implements OnInit {

  items: Todo[] = [];


  constructor(
    private readonly todoService: TodoService
  ) {}


  async ngOnInit() {
    this.items = await this.todoService.listTodos();
  }

  trackByFn(_: number, item: Todo) {
    return item.id;
  }
}
