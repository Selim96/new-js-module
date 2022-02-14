console.log("Hello!");

import { names, wages } from "./data/userData";
console.log(names);

export const names = ['Zack', 'Maria', 'Ann'];

export const wages = [2200, 5500, 1200];

// export const data = {
//   names: ['Zack', 'Maria', 'Ann'],
//   wages: [2200, 5500, 1200],
// };

// 2-nd way:
// export { names, wages };

const getSum = numbers => numbers.reduce((acc, num) => acc + num);

const getSortedStrings = strings =>
  strings.sort((a, b) => a.localeCompare(b)).join(' ');

export { getSum, getSortedStrings };

// 1-st way
const createTitleMarkup = (names, sum) =>
  `<h2>${names} got $${sum} all together</h2>`;

export default createTitleMarkup;

// 2-st way
// export default (names, sum) => `<h2>${names} got $${sum} all together</h2>`;
