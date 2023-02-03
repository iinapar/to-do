import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { fadeInAnimation, bounceIn } from '../animations';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
  animations: [fadeInAnimation, bounceIn],
})
export class TodoformComponent implements OnInit {
  taskit: {
    task: string;
    completed: boolean;
  }[] = [];
  task = '';
  todoformModel: FormGroup;

  constructor(private router: Router, private todoservice: TodoService, private location: Location) {
    this.todoformModel = new FormGroup({
      title: new FormControl('', Validators.required),
      task: new FormControl('', this.oneTask()),
    });
  }

  ngOnInit(): void {}

  // Kustomoitu validaattori, jolla varmistetaan, että taskit-taulukkoon on lisätty vähintään yksi alkio
  oneTask(): ValidatorFn {
    return (): { [key: string]: boolean } | null => {
      if (this.taskit.length <= 0) {
        return { onTask: true };
      }
      return null;
    };
  }

  // Lähetetään uusi todo-lista serverille.
  // title-arvoksi laitetaan formdatan title-arvo ja taskeihin taskit-taulukko
  onSubmit(formdata: any) {
    this.todoservice
      .addTodo({
        title: formdata.title,
        tasks: this.taskit,
      } as Todo)
      .subscribe();

    this.router.navigate(['/']);
  }

  addTask(formdata: any) {
    this.task = formdata;
    let newtask = {
      task: this.task,
      completed: false,
    };
    this.taskit.push(newtask);
    this.task = '';
  }

  remove(id: number) {
    this.taskit = this.taskit.filter((v, i) => i !== id);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
