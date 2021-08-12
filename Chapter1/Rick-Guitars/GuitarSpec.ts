import { Builder, Type, Wood } from "./Types";

export class GuitarSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private backWood: Wood,
    private topWood: Wood
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
}
