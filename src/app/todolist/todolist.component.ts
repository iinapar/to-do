import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [fadeInAnimation],
})
export class TodolistComponent implements OnInit {
  todolist: Todo[] = [];
  task = '';
  taskit: {
    task: string;
    completed: boolean;
  }[] = [];

  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.getTodos(); // Haetaan todo-lista
  }

  // Haetaan todolista serveriltä ja laitetaan saatu data komponentin omaan todolist-taulukkoon
  getTodos(): void {
    this.todoservice.getTodos().subscribe((todolist) => (this.todolist = todolist));
  }

  // Poistetaan todolistalta yksittäinen todo id:n perusteella
  deleteTodo(todo: Todo) {
    const id = todo.id;
    this.todoservice.deletetodo(id).subscribe();
    this.getTodos();
  }
}
