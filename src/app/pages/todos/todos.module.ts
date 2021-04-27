import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { RouterModule } from '@angular/router';
import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';


@NgModule({
  declarations: [TodosComponent, TodoDetailComponent, NothingToShowComponent],
  exports: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild([
      { path: ':id', component: TodoDetailComponent },
      { path: '**', component: NothingToShowComponent }
    ])
  ]
})
export class TodosModule {}
