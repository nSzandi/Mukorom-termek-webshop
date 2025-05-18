import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { FelhasznaloRegisztracio } from '../termek/kategoria.type';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  bejelentkezettE: boolean = false;

  constructor(
    private firebaseAuth: Auth,
    private firestore: Firestore,
    private cartService: CartService
  ) {
    console.log('AuthService constructor');
    runInInjectionContext(inject(Injector), () => {
      this.setSessionStoragePersistence();
    });
    this.user$ = user(this.firebaseAuth);
    this.user$.subscribe((result) => {
      if (result) {
        this.bejelentkezettE = true;
      } else {
        this.bejelentkezettE = false;
      }
    });
  }

  private setSessionStoragePersistence(): void {
    this.firebaseAuth.setPersistence(browserSessionPersistence);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }

  async regist(
    email: string,
    password: string,
    userData: Partial<FelhasznaloRegisztracio>
  ): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
    await this.cartService.createDocumentForUserId(email);
    delete userData.password;
    delete userData.confirmPassword;
    console.log(userData);
    await this.createUserData(userData);

    return userCredential;
  }

  private async createUserData(userData: Partial<User>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userData.email);

    return setDoc(userRef, userData);
  }
}
