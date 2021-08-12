import { Guitar } from "./Guitar";
import { Inventory } from "./Inventory";
import { Builder, Type, Wood } from "./Types";
import { initializeInventory } from "./utils";

const inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new Guitar(
  "",
  0,
  Builder.FENDER,
  "Stratocostor",
  Type.ELECTRIC,
  Wood.ALDER,
  Wood.ALDER
);

const guitar = inventory.search(whatErinLikes);

if (guitar !== null) {
  console.log(
    `Erin, You might like ${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:\n   ${guitar.getBackWood()} back and sides,\n   ${guitar.getTopWood()} top.\nYou can have it for only $${guitar.getPrice()}!`
  );
} else console.log("Sorry, Erin, we have nothing for you");
