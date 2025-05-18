import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms'; // FormsModule importálása
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; // ReactiveFormsModule importálása
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ],  // FormsModule szükséges a kétirányú adatbindinghez
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.css']
})
export class RegisztracioComponent {
  
  private fb = inject(FormBuilder);

  registForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  router = inject(Router)
  authService = inject(AuthService);
  

  // Regisztrációs logika
  onRegister(): void {
    console.log("ubzik vagytok mind")

    this.authService.regist(this.registForm.value.email, this.registForm.value.password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    })
  }

  // Vissza a bejelentkezéshez
  toggleLogin(): void {
    this.router.navigate(['/login']);
  }
  toggleLocation(location: string): void {
    this.router.navigate([location]);
  }
}
