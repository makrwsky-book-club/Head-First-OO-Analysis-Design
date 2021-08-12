import { Inventory } from "./Inventory";
import { GuitarSpec } from "./GuitarSpec";
import { Builder, Type, Wood } from "./Types";
import { initializeInventory } from "./utils";

const inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new GuitarSpec(
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
    const spec = guitar.getSpec();
    console.log(
      `  We have a ${spec.getBuilder()} ${spec.getModel()} ${spec.getType()} guitarSpec:\n   ${spec.getBackWood()} back and sides,\n   ${spec.getTopWood()} top.\n  You can have it for only $${guitar.getPrice()}!\n  ----`
    );
  });
} else console.log("Sorry, Erin, we have nothing for you");
