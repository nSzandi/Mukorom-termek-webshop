import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';
import { HomeComponent } from './home/home.component';
import { TermekekComponent } from './termekek/termekek.component';
import { KosarComponent } from './kosar/kosar.component';
import { FelhasznaloComponent } from './felhasznalo/felhasznalo.component';
import { RendelesekComponent } from './rendelesek/rendelesek.component';
import { InformacioComponent } from './informacio/informacio.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisztracioComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'termekek/:kategoria', component: TermekekComponent},
    {path: 'kosar', component: KosarComponent},
    {path: 'felhasznalo', component: FelhasznaloComponent},
    {path: 'rendelesek', component: RendelesekComponent},
    {path: 'info', component: InformacioComponent}
];