import { Builder, StringsCount, Type, Wood } from "./Types";

export class GuitarSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private backWood: Wood,
    private topWood: Wood,
    private numStrings: StringsCount
  ) {}

  getBuilder(): Builder {
    return this.builder;
  }
  getModel(): string {
    return this.model;
  }
  getType(): Type {
    return this.type;
  }
  getBackWood(): Wood {
    return this.backWood;
  }
  getTopWood(): Wood {
    return this.topWood;
  }
  getNumStrings(): StringsCount {
    return this.numStrings;
  }
  matches(otherSpec: GuitarSpec): boolean {
    return (
      otherSpec.getBuilder() === this.getBuilder() &&
      otherSpec.getModel() === this.getModel() &&
      otherSpec.getType() === this.getType() &&
      otherSpec.getBackWood() === this.getBackWood() &&
      otherSpec.getTopWood() === this.getTopWood() &&
      otherSpec.getNumStrings() === this.getNumStrings()
    );
  }
}
