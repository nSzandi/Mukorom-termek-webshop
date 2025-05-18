import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { TermekService } from '../service/termek.service';
import { Termek, kategoria } from '../termek/kategoria.type';
import { TermekComponent } from '../termek/termek.component';

@Component({
  selector: 'app-termekek',
  imports: [TermekComponent],
  templateUrl: './termekek.component.html',
  styleUrl: './termekek.component.css',
})
export class TermekekComponent implements OnInit {
  termekek: Termek[] = [];

  constructor(
    private termekService: TermekService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.termekService.getAllTermekAndUpdateAllMapsWithId().then(() => {
      console.log('done');
    });
    this.activatedRoute.params.subscribe((params) => {
      const kategoria = params['kategoria'] as kategoria;
      if (kategoria) {
        this.termekService
          .getTermekekByKategoria(kategoria)
          .subscribe((termekek) => {
            this.termekek = termekek[`osszes_${kategoria}`];
          });
      }
    });
  }

  addedToCart(termek: Termek) {
    const email = this.auth.currentUser?.email;
    if (!email) {
      console.error('User is not logged in');
      return;
    }
    this.cartService.addToCart(termek, email).then(() => {
      console.log('Termék hozzáadva a kosárhoz:', termek);
    });
  }
}
