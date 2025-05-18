import { Injectable } from '@angular/core';
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { KosarTartalom, Termek } from '../termek/kategoria.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private firestore: Firestore) {}
  public async createDocumentForUserId(email: string, initialItem?: any) {
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    await setDoc(cartDocRef, { createdAt: new Date() });
  }

  public async addToCart(
    termek: Termek,
    email: string,
    quantity: number = 1
  ): Promise<void> {
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    const cartSnap = await getDoc(cartDocRef);
    if (!cartSnap.exists()) {
      await setDoc(cartDocRef, { createdAt: new Date() });
    }

    const cartItemRef = doc(collection(cartDocRef, 'cartItems'), termek.id);

    const cartItemSnap = await getDoc(cartItemRef);
    if (cartItemSnap.exists()) {
      await updateDoc(cartItemRef, {
        mennyiseg: increment(quantity),
        ar: termek.ar * quantity,
      });
    } else {
      await setDoc(cartItemRef, {
        nev: termek.nev,
        ar: termek.ar,
        mennyiseg: quantity,
        id: termek.id,
      });
    }
  }
  public async removeFromCart(termek: KosarTartalom, email: string) {
    console.log(termek, 'asd');
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    const cartItemRef = doc(collection(cartDocRef, 'cartItems'), termek.id);
    await deleteDoc(cartItemRef);
  }

  public async clearCart(email: string) {
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    const cartItemRef = collection(cartDocRef, 'cartItems');
    const querySnapshot = await getDocs(cartItemRef);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  public async getCartItems(email: string): Promise<KosarTartalom[]> {
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    const cartItemsCol = collection(cartDocRef, 'cartItems');
    const snapshot = await getDocs(cartItemsCol);
    return snapshot.docs.map((doc) => doc.data() as KosarTartalom);
  }

  public async changeQuantity(id: string, email: string, quantity: number) {
    const cartDocRef = doc(this.firestore, 'Kosar', email);
    const cartItemRef = doc(collection(cartDocRef, 'cartItems'), id);
    if (quantity <= 0) {
      await deleteDoc(cartItemRef);
      return;
    }
    await updateDoc(cartItemRef, {
      mennyiseg: quantity,
    });
  }
}
