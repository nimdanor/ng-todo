import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  template: `
  TODO DETAIL {{id}}
  `
})
export class TodoDetailComponent implements OnInit {

  id: string | null | undefined = "";


  constructor(
    private readonly todoService: TodoService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // todoService.findTodo(id);
  }

}
