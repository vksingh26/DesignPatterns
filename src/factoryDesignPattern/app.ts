import { superHeroFactory } from "./superHeroFactory";

let Avengers = superHeroFactory.getAvengers(1);
let XMan = superHeroFactory.getXMan(2);
let FantasticFour = superHeroFactory.getFantasticFour(3);

console.log(`Avengers: ${Avengers.superheroOne}, ${Avengers.superheroTwo}, ${Avengers.superheroThree}
X-Man: ${XMan.superheroOne},  ${XMan.superheroTwo}, ${XMan.superheroThree}
Fantastic Four: ${FantasticFour}`);