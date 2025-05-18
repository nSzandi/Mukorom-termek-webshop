import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Termek } from './kategoria.type';
// import { termekAdatok } from './termekAdatok';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForintPipe } from '../forint.pipe';
import { TermekMennyisegPipe } from '../termek-mennyiseg.pipe';

@Component({
  selector: 'app-termek',
  imports: [MatCardModule, MatButtonModule, ForintPipe, TermekMennyisegPipe],
  templateUrl: './termek.component.html',
  styleUrl: './termek.component.css',
})
export class TermekComponent {
  @Input() termekAdatok: Termek;
  @Output() termekHozzadvaKosarhoz: EventEmitter<Termek> =
    new EventEmitter<Termek>();

  public addToCart(termek: Termek) {
    this.termekHozzadvaKosarhoz.emit(termek);
  }
}
