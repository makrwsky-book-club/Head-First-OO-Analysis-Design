import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
    const guitar = new Guitar(serialNumber, price, spec);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: string): Guitar {
    const guitar = this.guitars.find(
      (guitar: Guitar) => guitar.getSerialNumber() === serialNumber
    );
    if (!guitar) return null;
    return guitar;
  }

  search(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars = this.guitars.filter((guitar: Guitar) =>
      guitar.getSpec().matches(searchSpec)
    );
    return matchingGuitars;
  }
}
