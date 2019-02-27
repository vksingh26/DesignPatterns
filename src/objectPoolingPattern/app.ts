import { superHeroPooling } from "./superHeroPooling";

let type = 3;
let pool = new superHeroPooling(type);
//load 15 fantastic four

for (let i = 0; i < 15; i++){
    console.log(i + 1);
    console.log(pool.getFantasticFour());
}