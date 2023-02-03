import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todolist: Todo[] = [
      {
        id: 1,
        title: 'Packing list',
        tasks: [
          {
            task: 'Toothbrush',
            completed: true,
          },
          {
            task: 'Toothpaste',
            completed: false,
          },
          {
            task: 'Hair brush',
            completed: false,
          },
          {
            task: 'Shampoo + Conditioner',
            completed: false,
          },
          {
            task: 'Earplugs',
            completed: false,
          },
          {
            task: 'Snacks',
            completed: false,
          },
        ],
      },
    ];
    return { todolist };
  }

  genId(todolist: Todo[]): number {
    return todolist.length > 0 ? Math.max(...todolist.map((todolist) => todolist.id)) + 1 : 1;
  }
}
