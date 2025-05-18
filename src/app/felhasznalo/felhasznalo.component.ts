import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-felhasznalo',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './felhasznalo.component.html',
  styleUrl: './felhasznalo.component.css',
})
export class FelhasznaloComponent implements OnInit, OnDestroy {
  public userService = inject(UserService);
  private auth = inject(Auth);

  ngOnDestroy(): void {
    this.userService.clearUser();
  }

  ngOnInit(): void {
    this.userService.getUser(this.auth.currentUser?.email || '');
  }
}
