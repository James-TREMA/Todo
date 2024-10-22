export class Task {
    constructor(
      public title: string,      // Le titre de la tâche
      public isCompleted: boolean = false  // Statut de la tâche : complétée ou non (par défaut à "non complétée")
    ) {}
  }
  