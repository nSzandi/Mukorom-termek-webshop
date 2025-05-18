import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ForintPipe } from '../forint.pipe';
// import { kosarAdatok } from './kosarAdatok';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CartService } from '../service/cart.service';
import { KosarTartalom } from '../termek/kategoria.type';

@Component({
  selector: 'app-kosar',
  imports: [
    MatDividerModule,
    MatCardModule,
    CommonModule,
    ForintPipe,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './kosar.component.html',
  styleUrl: './kosar.component.css',
})
export class KosarComponent implements OnInit {
  kosarData: KosarTartalom[] = [];

  totalPrice: number = 0;
  dialog = inject(MatDialog);
  cartService = inject(CartService);
  auth = inject(Auth);
  fb = inject(FormBuilder);
  cartForm: FormGroup = this.fb.group({});
  constructor() {}
  calculateTotalPrice() {
    this.totalPrice = this.kosarData.reduce((acc, item) => {
      const formValue = this.cartForm.get('mennyiseg_' + item.id)?.value;
      const mennyiseg =
        formValue !== undefined && formValue !== null
          ? +formValue
          : item.mennyiseg;
      return acc + item.ar * mennyiseg;
    }, 0);
  }

  ngOnInit(): void {
    this.cartService.getCartItems(this.auth.currentUser?.email).then((data) => {
      this.kosarData = data;
      this.kosarData.forEach((item) => {
        this.cartForm.addControl(
          'mennyiseg_' + item.id,
          this.fb.control(item.mennyiseg)
        );
      });
      this.calculateTotalPrice();
    });
  }

  onQuantityChange(termek: KosarTartalom) {
    const formValue = this.cartForm.get('mennyiseg_' + termek.id)?.value;
    const mennyiseg =
      formValue !== undefined && formValue !== null
        ? +formValue
        : termek.mennyiseg;
    let torlesEs = false;
    if (mennyiseg < 1) {
      torlesEs = true;
    }
    this.cartService
      .changeQuantity(termek.id, this.auth.currentUser?.email, mennyiseg)
      .then(() => {
        this.kosarData.forEach((item) => {
          if (item.id === termek.id) {
            if (torlesEs) {
              this.kosarData = this.kosarData.filter(
                (item) => item.id !== termek.id
              );
              this.cartForm.removeControl('mennyiseg_' + termek.id);
            } else {
              item.mennyiseg = mennyiseg;
            }
          }
        });
        this.calculateTotalPrice();
      });
  }

  removeItem(termek: KosarTartalom) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: { termek: termek },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);

        if (result) {
          this.cartService
            .removeFromCart(termek, this.auth.currentUser?.email)
            .then(() => {
              this.kosarData = this.kosarData.filter(
                (item) => item.id !== termek.id
              );
              this.calculateTotalPrice();
            });
        }
      });
  }
}
