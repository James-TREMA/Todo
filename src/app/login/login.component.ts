import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';  // Import du RouterModule et du service Router
import { AuthService } from '../services/auth.service';  // Import du service d'authentification

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  // Import du RouterModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}  // Injection du service AuthService et Router

  onLogin() {
    // Vérification des identifiants avec le service AuthService
    if (this.authService.login(this.username, this.password)) {
      // Redirection vers le Dashboard après un login réussi
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
