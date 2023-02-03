import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  animations: [fadeInAnimation],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo?: Todo;

  task = '';

  constructor(private todoService: TodoService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.gettodo(); // onInitissä haetaan yksittäinen todo id:n perusteella serveriltä. Id määräytyy sen mukaan mitä listaa klikattiin todolist-komponentissa
  }

  gettodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe((todo) => (this.todo = todo));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todo) {
      this.todoService.updatetodo(this.todo).subscribe(() => this.goBack());
    }
  }

  addTask(formdata: any) {
    this.task = formdata;
    let newtask = {
      task: this.task,
      completed: false,
    };
    this.todo!.tasks.push(newtask);
    this.task = '';
  }

  removeTask(id: number) {
    this.todo!.tasks = this.todo!.tasks.filter((v, i) => i !== id);
  }
}
