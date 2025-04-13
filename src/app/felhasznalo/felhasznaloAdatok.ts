import { Felhasznalo } from '../termek/kategoria.type';

export const felhasznaloAdatok : Felhasznalo= 
    {
        nev: 'Kiss Anna',
        email: 'kisanna@gmail.com',
        jelszo: '***',
        szulDatum: undefined,
        cim: 'Kisváros, Kis utca 1.',
        telefonSzam: '3610-123-4567'
    };


    export const tobbFelhasznaloAdatok: Felhasznalo[] = [
        {
          nev: 'Nagy Péter',
          email: 'nagypeter@gmail.com',
          jelszo: '***',
          szulDatum: new Date('1990-05-15'),
          cim: 'Budapest, Nagy utca 12.',
          telefonSzam: '3610-987-6543',
        },
        {
          nev: 'Tóth Eszter',
          email: 'totheszter@gmail.com',
          jelszo: '***',
          szulDatum: new Date('1985-08-20'),
          cim: 'Debrecen, Kossuth utca 5.',
          telefonSzam: '3620-123-4567',
        },
        {
          nev: 'Szabó László',
          email: 'szabolaszlo@gmail.com',
          jelszo: '***',
          szulDatum: new Date('1978-03-10'),
          cim: 'Szeged, Fő tér 3.',
          telefonSzam: '3630-987-6543',
        },
        {
          nev: 'Kovács Erika',
          email: 'kovacserika@gmail.com',
          jelszo: '***',
          szulDatum: new Date('1995-12-25'),
          cim: 'Pécs, Arany János utca 8.',
          telefonSzam: '3620-456-7890',
        },
        {
          nev: 'Varga Zoltán',
          email: 'vargazoltan@gmail.com',
          jelszo: '***',
          szulDatum: new Date('1982-07-07'),
          cim: 'Győr, Bartók Béla utca 10.',
          telefonSzam: '3630-654-3210',
        },
      ];