import { booleanAttribute, Injectable } from '@angular/core';
import { Auth, browserSessionPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut, User, user } from '@angular/fire/auth';
import { from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user$: Observable<User | null>;

    bejelentkezettE: boolean = false;

  constructor(private firebaseAuth: Auth) {
        this.setSessionStoragePersistence();
           this.user$ = user(this.firebaseAuth);
        this.user$.subscribe((result) => {
          if(result) {
            this.bejelentkezettE = true;
          } else {
              this.bejelentkezettE= false;
          }
          
        })
        
   }

   private setSessionStoragePersistence(): void {
    this.firebaseAuth.setPersistence(browserSessionPersistence);
  }

  
  login(email: string, password: string): Observable<void> {
      const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
    });
    return from(promise);
  }


    logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }

  regist(email: string, password: string): Observable<void>
  {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(()=>{
      
    })
    return from(promise)
  }
}
