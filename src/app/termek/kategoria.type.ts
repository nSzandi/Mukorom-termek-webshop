export type kategoria =
  | 'reszelo'
  | 'ecset'
  | 'gel_lakk'
  | 'zsele'
  | 'porcelan'
  | 'gepek'
  | 'borapolas'
  | 'kiegeszito';

export interface Termek {
  id: string;
  nev: string;
  ar: number;
  mennyiseg: string;
  kep: string;
  leiras: string;
  kategoria: kategoria;
}

export interface KosarTartalom {
  ar: number;
  nev: string;
  mennyiseg: number;
  id: string;
}

export interface KosarElem {
  termek: Termek;
  mennyiseg: number;
}

export interface Felhasznalo {
  name: string;
  email: string;
  cim: string;
  telefonSzam: string;
}

export interface FelhasznaloRegisztracio extends Felhasznalo {
  password: string;
  confirmPassword: string;
}

export interface Rendeles {
  id: string;
  felhasznalo: Felhasznalo;
  kosar_tartalom: KosarElem[];
  osszeg: number;
  datum: Date;
}
