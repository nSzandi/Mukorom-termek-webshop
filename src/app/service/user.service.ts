import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Felhasznalo } from '../termek/kategoria.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  public user: Felhasznalo;

  getUser(email: string): Observable<Felhasznalo> {
    console.log('getUser', email);
    const userRef = doc(this.firestore, 'Users', email);
    return from(
      getDoc(userRef).then(
        (snapshot) => (this.user = snapshot.data() as Felhasznalo)
      )
    );
  }

  clearUser(): void {
    this.user = {
      name: '',
      email: '',
      cim: '',
      telefonSzam: '',
    };
  }
}
