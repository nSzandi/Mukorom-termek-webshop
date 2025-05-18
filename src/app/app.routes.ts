import { Routes } from '@angular/router';
import { FelhasznaloComponent } from './felhasznalo/felhasznalo.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InformacioComponent } from './informacio/informacio.component';
import { KosarComponent } from './kosar/kosar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';
import { RendelesekComponent } from './rendelesek/rendelesek.component';
import { TermekekComponent } from './termekek/termekek.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisztracioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'termekek/:kategoria', component: TermekekComponent },
  { path: 'kosar', component: KosarComponent, canActivate: [authGuard] },
  {
    path: 'felhasznalo',
    component: FelhasznaloComponent,
    canActivate: [authGuard],
  },
  { path: 'rendelesek', component: RendelesekComponent },
  { path: 'info', component: InformacioComponent },
  { path: 'logout', component: LogoutComponent },
];
