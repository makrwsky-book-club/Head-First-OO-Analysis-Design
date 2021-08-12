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

const matchingGuitars = inventory.search(whatErinLikes);

if (matchingGuitars.length > 0) {
  console.log("Erin, You might like these guitars:");
  matchingGuitars.forEach((guitar) => {
    console.log(
      `  We have a ${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:\n   ${guitar.getBackWood()} back and sides,\n   ${guitar.getTopWood()} top.\n  You can have it for only $${guitar.getPrice()}!\n  ----`
    );
  });
} else console.log("Sorry, Erin, we have nothing for you");
