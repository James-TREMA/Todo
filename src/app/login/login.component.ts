import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Router],  // Ajout du module Router pour rediriger
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}  // Injection du service Router

  onLogin() {
    // Logique de gestion de la soumission du formulaire
    if (this.username === 'Pierre' && this.password === 'okand') {
      // Redirection vers le Dashboard après un login réussi
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
