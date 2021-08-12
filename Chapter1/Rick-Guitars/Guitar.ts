export class Guitar {
  constructor(
    private serialNumber: string,
    private price: number,
    private builder: string,
    private model: string,
    private type: string,
    private backWood: string,
    private topWood: string
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
  getBuilder(): string {
    return this.builder;
  }
  getModel(): string {
    return this.model;
  }
  getType(): string {
    return this.type;
  }
  getBackWood(): string {
    return this.backWood;
  }
  getTopWood(): string {
    return this.topWood;
  }
}
