import { Component } from '@angular/core';
import { dummyRendelesek } from './dummy_rendelesek';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ForintPipe } from '../forint.pipe';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rendelesek',
  imports: [MatDividerModule, MatCardModule, ForintPipe, CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './rendelesek.component.html',
  styleUrl: './rendelesek.component.css'
})
export class RendelesekComponent {
  public searchTerm: string = '';
  dummyRendelesekData = dummyRendelesek;
  filteredRendelesek = this.dummyRendelesekData; // Initialize with all rendelesek
}
