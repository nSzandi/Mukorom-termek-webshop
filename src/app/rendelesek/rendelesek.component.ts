import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForintPipe } from '../forint.pipe';
import { dummyRendelesek } from './dummy_rendelesek';

@Component({
  selector: 'app-rendelesek',
  imports: [
    MatDividerModule,
    MatCardModule,
    ForintPipe,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './rendelesek.component.html',
  styleUrl: './rendelesek.component.css',
})
export class RendelesekComponent {
  public searchTerm: string = '';
  dummyRendelesekData = dummyRendelesek;
  filteredRendelesek = this.dummyRendelesekData; // Initialize with all rendelesek
}
