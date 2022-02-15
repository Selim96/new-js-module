console.log("Hello!");

import { names, wages } from "./data/dataUser.js";
console.log(names);

import * as services from './services/processData.js';

import createTitleMarkup from "./components/createTitle.js";





// ------------------
const sortedNames = services.getSortedStrings(names);

const wagesSum = services.getSum(wages);

const titleMarkup = createTitleMarkup(sortedNames, wagesSum);

document.body.insertAdjacentHTML('afterbegin', titleMarkup);