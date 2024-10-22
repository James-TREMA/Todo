import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Pour les directives communes comme *ngIf et *ngFor
import { FormsModule } from '@angular/forms';  // Pour utiliser ngModel dans les formulaires
import { Task } from './task.model';  // Import du modèle Task

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ajout de FormsModule pour utiliser ngModel, et CommonModule pour les directives Angular
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string = 'Pierre';  // Nom d'utilisateur par défaut
  newTaskTitle: string = '';  // Pour stocker la nouvelle tâche à ajouter
  tasks: Task[] = [];  // Liste des tâches

  constructor() {
    // Initialisation des tâches par défaut
    this.tasks = [
      new Task('est'),
      new Task('jouer')
    ];
  }

  // Ajouter une nouvelle tâche
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push(new Task(this.newTaskTitle));
      this.newTaskTitle = '';  // Réinitialiser le champ après ajout
    }
  }

  // Supprimer une tâche
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Modifier une tâche
  editTask(task: Task, newTitle: string) {
    if (newTitle.trim()) {
      task.title = newTitle;
    }
  }

  // Cocher/Décocher une tâche
  toggleTaskCompletion(task: Task) {
    task.isCompleted = !task.isCompleted;
  }
}
