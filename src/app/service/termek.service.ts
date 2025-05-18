import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Termek, kategoria } from '../termek/kategoria.type';

@Injectable({
  providedIn: 'root',
})
export class TermekService {
  constructor(private firestore: Firestore) {}

  public termekek: Termek[] = [];

  getTermekekByKategoria(
    kategoria: kategoria
  ): Observable<{ [key: string]: Termek[] }> {
    console.log('getTermekekByKategoria', kategoria);
    const termekekRef = doc(this.firestore, 'Termekek', kategoria);
    return from(
      getDoc(termekekRef).then((asd) => {
        console.log('asd', asd, asd.data());
        const key = `osszes_${kategoria}`;
        const data = asd.data();
        return { [key]: data && data[key] ? (data[key] as Termek[]) : [] };
      })
    );
  }

  clearTermekek(): void {
    this.termekek = [];
  }

  async getAllTermekAndUpdateAllMapsWithId() {
    //   const termekekCol = collection(this.firestore, 'Termekek');
    //   return from(
    //     getDocs(termekekCol).then((snapshot) => {
    //       console.log('getAllTermekAndUpdateAllMapsWithId', snapshot);
    //       snapshot.forEach(async (values) => {
    //         const data = values.data();
    //         console.log('data', data);
    //         const currentTermekek = data[`osszes_${values.id}`] as Termek[];
    //         console.log('currentTermekek', currentTermekek);
    //         if (currentTermekek) {
    //           console.log('asd');
    //           const newTermekek = currentTermekek.map((termek) => {
    //             const customId =
    //               Math.random().toString(36).substring(2, 10) +
    //               Math.random().toString(36).substring(2, 10);
    //             termek.id = customId;
    //             console.log('termek', termek);
    //             return termek;
    //           });
    //           console.log('newTermekek', newTermekek);
    //           console.log(values);
    //           console.log('values.id', values.id);
    //           const docRef = doc(this.firestore, 'Termekek', values.id);
    //         }
    //       });
    //       return this.termekek;
    //     })
    //   );
  }
}
