import { Guitar } from "./Guitar";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
  ): void {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: string): Guitar {
    const guitar = this.guitars.find(
      (guitar: Guitar) => guitar.getSerialNumber() === serialNumber
    );
    if (!guitar) return null;
    return guitar;
  }
  search(searchGuitar: Guitar): Guitar {
    const guitar = this.guitars.find(
      (guitar: Guitar) =>
        guitar.getBuilder() === searchGuitar.getBuilder() &&
        guitar.getModel() === searchGuitar.getModel() &&
        guitar.getType() === searchGuitar.getType() &&
        guitar.getBackWood() === searchGuitar.getBackWood() &&
        guitar.getTopWood() === searchGuitar.getTopWood()
    );
    if (!guitar) return null;
    return guitar;
  }
}
