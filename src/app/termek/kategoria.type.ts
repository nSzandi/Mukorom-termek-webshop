export type kategoria = 'reszelo' | 'ecset' | 'gel_lakk' | 'zsele' | 'porcelan' | 'gep' | 'borapolas' | 'kiegeszito'

export interface Termek {
    nev: string;
    ar: number;
    mennyiseg: string;
    kep: string;
    leiras: string;
    kategoria: kategoria;
}

export interface KosarElem {
    termek: Termek;
    mennyiseg: number;
}

export interface Felhasznalo {
    nev: string;
    email: string;
    jelszo: string;
    szulDatum: Date;
    cim: string;
    telefonSzam: string;
}

export interface Rendeles {
    id: string;
    felhasznalo: Felhasznalo;
    kosar_tartalom: KosarElem[];
    osszeg: number;
    datum: Date;
}
