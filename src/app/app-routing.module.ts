import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: 'todoform', component: TodoformComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
