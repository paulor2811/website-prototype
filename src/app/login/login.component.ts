import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showContent: boolean = true;

  constructor(private router: Router) {} // Injete o Router no construtor

  clearContent() {
    this.showContent = false;
    this.router.navigate(['/register']); // Navegue para a rota do RegisterComponent
  }
}
