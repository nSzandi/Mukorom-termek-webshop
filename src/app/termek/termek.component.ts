import { Component, EventEmitter, Input, Output } from '@angular/core';
import { kategoria, Termek } from './kategoria.type';
import { termekAdatok } from './termekAdatok';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ForintPipe } from '../forint.pipe';

@Component({
  selector: 'app-termek',
  imports: [MatCardModule, MatButtonModule, ForintPipe],
  templateUrl: './termek.component.html',
  styleUrl: './termek.component.css'
})
export class TermekComponent {
  @Input() termekAdatok: Termek;
  @Output() termekHozzadvaKosarhoz: EventEmitter<Termek> = new EventEmitter<Termek>();


  public addToCart(termek: Termek) {
    this.termekHozzadvaKosarhoz.emit(termek);
  }
}
