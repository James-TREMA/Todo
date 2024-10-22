import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],  // Ajout de FormsModule pour utiliser ngModel, et CommonModule pour les directives Angular
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('taskAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})

export class DashboardComponent {
  username: string = 'Pierre'; 
  newTaskTitle: string = ''; 
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }

  editTask(task: Task, newTitle: string) {
    this.taskService.editTask(task, newTitle);
  }

  toggleTaskCompletion(task: Task) {
    this.taskService.toggleTaskCompletion(task);
  }
}