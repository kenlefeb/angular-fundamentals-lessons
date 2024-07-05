import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <section>
        @for (todo of todos; track todo.id) {
            <label [ngStyle]="{'text-decoration': todo.completed ? 'line-through' : 'none'}">
                <input type="checkbox" [checked]="todo.completed" (change)="updateTodo(todo)" title="todo.title" /> {{ todo.title }}
        </label>
        }
    </section>
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {
    todo.completed = !todo.completed;
    console.log(`${todo.id}. ${todo.title}: ${todo.completed}`);
  }
  todos: Todo[] = [
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ];
}
