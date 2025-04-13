import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ForintPipe } from '../forint.pipe';
import { kosarAdatok } from './kosarAdatok';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Termek } from '../termek/kategoria.type';


@Component({
  selector: 'app-kosar',
  imports: [MatDividerModule, MatCardModule, CommonModule, ForintPipe, MatButtonModule, MatDialogModule],
  templateUrl: './kosar.component.html',
  styleUrl: './kosar.component.css'
})
export class KosarComponent {
  dummyKosarData = kosarAdatok;

  totalPrice: number = 0;
  dialog = inject(MatDialog)
  constructor() {
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.dummyKosarData.reduce((acc, item) => acc + item.termek.ar * item.mennyiseg, 0);
  }

  removeItem(termek: Termek) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: { termek: termek },
  }).afterClosed().subscribe((result) => {
    console.log(result)

    if (result) {
      this.dummyKosarData = this.dummyKosarData.filter(item => item.termek.nev !== termek.nev);
      this.calculateTotalPrice();
    }
  })
  

}
}
