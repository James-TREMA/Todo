import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', 
    component: DashboardComponent, 
    canActivate: [authGuard],  // Protection de la route avec le guard
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirection par défaut vers login
];
