import { Inventory } from "./Inventory";

export const initializeInventory = (inventory: Inventory): void => {
  inventory.addGuitar(
    "V95693",
    1499.95,
    "Fender",
    "Stratocastor",
    "electric",
    "Alder",
    "Alder"
  );
};
