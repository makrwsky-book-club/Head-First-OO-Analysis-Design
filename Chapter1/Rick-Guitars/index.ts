import { Guitar } from "./Guitar";
import { Inventory } from "./Inventory";
import { initializeInventory } from "./utils";

const inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new Guitar(
  "",
  0,
  "fender",
  "Stratocostar",
  "electric",
  "Alder",
  "Alder"
);

const guitar = inventory.search(whatErinLikes);
if (guitar !== null) {
  console.log(
    `Erin, You might like ${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:\n     ${guitar.getBackWood()} back and sides,\n   ${guitar.getTopWood()} top.\nYou can have it for only $${guitar.getPrice()}!`
  );
} else console.log("Sorry, Erin, we have nothing for you");
