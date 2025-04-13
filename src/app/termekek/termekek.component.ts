import { Component, inject, OnInit } from '@angular/core';
import { termekAdatok } from '../termek/termekAdatok';
import { TermekComponent } from '../termek/termek.component';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Termek } from '../termek/kategoria.type';

@Component({
  selector: 'app-termekek',
  imports: [TermekComponent],
  templateUrl: './termekek.component.html',
  styleUrl: './termekek.component.css'
})
export class TermekekComponent implements OnInit {
  osszesTermek = termekAdatok;

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const kategoria = params['kategoria'];
      this.osszesTermek = termekAdatok.filter(termek => termek.kategoria === kategoria);
    });
}

addedToCart(termek: Termek) {
  // Implement the logic to handle adding the product to the cart here
  console.log(`Termék hozzáadva a kosárhoz: ${termek.nev}`);
  // You can also update the cart count or perform any other actions as needed
}
}
