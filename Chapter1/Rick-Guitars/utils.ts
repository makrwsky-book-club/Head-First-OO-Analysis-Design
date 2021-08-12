import { Inventory } from "./Inventory";
import { Builder, Type, Wood } from "./Types";

export const initializeInventory = (inventory: Inventory): void => {
  inventory.addGuitar(
    "V95693",
    1499.95,
    Builder.FENDER,
    "Stratocostor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER
  );
};
