import { GuitarSpec } from "./GuitarSpec";

export class Guitar {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: GuitarSpec
  ) {}

  getSerialNumber(): string {
    return this.serialNumber;
  }
  getPrice(): number {
    return this.price;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  getSpec(): GuitarSpec {
    return this.spec;
  }
}
