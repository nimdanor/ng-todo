import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'todos', component: TodosComponent },

  // LAZY LOADING

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'todos', loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule) },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
