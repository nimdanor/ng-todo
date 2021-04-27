import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <h1>Connexion</h1>
  <form (ngSubmit)="signIn()">
    <input
      name="username"
      type="text"
      placeholder="Username"
      [(ngModel)]="username"
    />
    <button type="submit" [disabled]="!username">{{ 'Se connecter'|uppercase }}</button>
  </form>
  `
})
export class LoginComponent {

  username = '';

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  async signIn() {
    try {
      await this.userService.signIn(this.username);
      this.router.navigateByUrl('/todos');
    } catch {
      alert('Une erreur est survenue !');
    }
  }
}
