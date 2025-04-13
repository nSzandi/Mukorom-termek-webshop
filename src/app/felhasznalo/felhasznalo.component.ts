import { Component } from '@angular/core';
import { felhasznaloAdatok } from './felhasznaloAdatok';
import {  MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-felhasznalo',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './felhasznalo.component.html',
  styleUrl: './felhasznalo.component.css'
})
export class FelhasznaloComponent {
    felhasznalo = felhasznaloAdatok; 
  }
