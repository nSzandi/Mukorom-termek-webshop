import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; // FormsModule importálása
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ], // FormsModule szükséges a kétirányú adatbindinghez
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.css'],
})
export class RegisztracioComponent {
  private fb = inject(FormBuilder);

  registForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    cim: ['', [Validators.required]],
    telefonSzam: ['', [Validators.required]],
  });

  router = inject(Router);
  authService = inject(AuthService);

  // Regisztrációs logika
  onRegister(): void {
    this.authService
      .regist(
        this.registForm.value.email,
        this.registForm.value.password,
        this.registForm.value
      )
      .then(() => {
        // Regisztráció sikeres
        console.log('Regisztráció sikeres');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        // Regisztráció sikertelen
        console.error('Regisztráció sikertelen', error);
      });
  }

  // Vissza a bejelentkezéshez
  toggleLogin(): void {
    this.router.navigate(['/login']);
  }
  toggleLocation(location: string): void {
    this.router.navigate([location]);
  }
}
