import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);

  username = '';
  password = '';
  errorMessage = '';
  loggedIn = this.authService.isLoggedIn();

  onSubmit(): void {
    this.errorMessage = '';

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loggedIn = true;
        this.username = '';
        this.password = '';
        window.location.reload();
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.loggedIn = false;
    window.location.reload();
  }
}