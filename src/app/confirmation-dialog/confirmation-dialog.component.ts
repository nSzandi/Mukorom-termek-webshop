import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Termek } from '../termek/kategoria.type';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  termek: Termek;

  MAT_DIALOG_DATA = inject(MAT_DIALOG_DATA)
  dialog = inject(MatDialogRef<ConfirmationDialogComponent>);

  constructor() {
    this.termek = this.MAT_DIALOG_DATA.termek;
  }

  closeDialog(confirmed: boolean) {
    // Close the dialog and pass the confirmation result back to the caller
    this.dialog.close(confirmed);
  }
}
