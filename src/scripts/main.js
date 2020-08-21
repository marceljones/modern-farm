console.log("Welcome to Marcel's main module");

import { createPlan } from './plan.js';
import { createPotato} from './seeds/potato.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan);

for (const potato of yearlyPlan) {
    console.log("the item is", potato);
}


import { createAsparagus } from "./seeds/asparagus.js";

const asparagusSeed = createAsparagus();
console.log(asparagusSeed);