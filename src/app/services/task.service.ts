import { Injectable } from '@angular/core';
import { Task } from '../dashboard/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    // Initialisation des tâches par défaut
    this.tasks = [new Task('est'), new Task('jouer')];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.tasks.push(new Task(title));
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  editTask(task: Task, newTitle: string): void {
    if (newTitle.trim()) {
      task.title = newTitle;
    }
  }

  toggleTaskCompletion(task: Task): void {
    task.isCompleted = !task.isCompleted;
  }
}
