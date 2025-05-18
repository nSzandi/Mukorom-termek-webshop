import { tobbFelhasznaloAdatok } from '../felhasznalo/felhasznaloAdatok';
import { Rendeles } from '../termek/kategoria.type';

export const dummyRendelesek: Rendeles[] = [
  {
    id: 'RND-001',
    felhasznalo: tobbFelhasznaloAdatok[0],
    kosar_tartalom: [], // First two items
    osszeg: 10,
    datum: new Date('2023-12-01'),
  },
  {
    id: 'RND-002',
    felhasznalo: tobbFelhasznaloAdatok[0],
    kosar_tartalom: [], // Next two items
    osszeg: 10,
    datum: new Date('2023-12-05'),
  },
  {
    id: 'RND-003',
    felhasznalo: tobbFelhasznaloAdatok[1],
    kosar_tartalom: [], // Last item
    osszeg: 10,
    datum: new Date('2023-12-10'),
  },
];
