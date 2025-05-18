import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
     provideFirebaseApp(() => 
      initializeApp({ projectId: "mukorom-7c880", 
                      appId: "1:630568650398:web:70e57f5b31959023631d8f", 
                      storageBucket: "mukorom-7c880.firebasestorage.app", 
                      apiKey: "AIzaSyB_6NmFqSUaWT11bjh1-m1hBeiAhujHjSs", 
                      authDomain: "mukorom-7c880.firebaseapp.com", 
                      messagingSenderId: "630568650398" })), 
                      provideAuth(() => getAuth()), 
                      provideFirestore(() => getFirestore())]
};
