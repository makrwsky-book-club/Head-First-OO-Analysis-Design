import { Inventory } from "./Inventory";
import { GuitarSpec } from "./GuitarSpec";
import { Builder, StringsCount, Type, Wood } from "./Types";

export const initializeInventory = (inventory: Inventory): void => {
  const spec = new GuitarSpec(
    Builder.FENDER,
    "Stratocostor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER,
    StringsCount.SIX
  );
  inventory.addGuitar("V95693", 1499.95, spec);
  inventory.addGuitar("V9512", 1549.95, spec);
};
