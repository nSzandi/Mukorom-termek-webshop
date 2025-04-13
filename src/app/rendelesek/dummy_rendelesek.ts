import { Rendeles } from "../termek/kategoria.type";
import { kosarAdatok } from "../kosar/kosarAdatok";
import { tobbFelhasznaloAdatok } from "../felhasznalo/felhasznaloAdatok";

export const dummyRendelesek: Rendeles[] = [
  {
    id: "RND-001",
    felhasznalo: tobbFelhasznaloAdatok[0],
    kosar_tartalom: [kosarAdatok[0], kosarAdatok[1]], // First two items
    osszeg: kosarAdatok[0].termek.ar * kosarAdatok[0].mennyiseg + kosarAdatok[1].termek.ar * kosarAdatok[1].mennyiseg,
    datum: new Date("2023-12-01"),
  },
  {
    id: "RND-002",
    felhasznalo: tobbFelhasznaloAdatok[0],
    kosar_tartalom: [kosarAdatok[2], kosarAdatok[3]], // Next two items
    osszeg: kosarAdatok[2].termek.ar * kosarAdatok[2].mennyiseg + kosarAdatok[3].termek.ar * kosarAdatok[3].mennyiseg,
    datum: new Date("2023-12-05"),
  },
  {
    id: "RND-003",
    felhasznalo: tobbFelhasznaloAdatok[1],
    kosar_tartalom: [kosarAdatok[4]], // Last item
    osszeg: kosarAdatok[4].termek.ar * kosarAdatok[4].mennyiseg,
    datum: new Date("2023-12-10"),
  },
];