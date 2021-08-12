import { Guitar } from "./Guitar";
import { Builder, Type, Wood } from "./Types";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
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

  search(searchGuitar: Guitar): Guitar[] {
    const matchingGuitars = this.guitars.filter(
      (guitar: Guitar) =>
        guitar.getBuilder() === searchGuitar.getBuilder() &&
        guitar.getModel() === searchGuitar.getModel() &&
        guitar.getType() === searchGuitar.getType() &&
        guitar.getBackWood() === searchGuitar.getBackWood() &&
        guitar.getTopWood() === searchGuitar.getTopWood()
    );
    return matchingGuitars;
  }
}
