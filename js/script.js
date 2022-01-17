const price = prompt("Input check number, please!");
console.log(price);

const formatedPrice = Number.parseFloat(price);

const tip = prompt("Input tip in %, please!");
console.log(tip);

const formatedTip = Number.parseFloat(tip);

const tipAmount = Number((formatedPrice * formatedTip / 100).toFixed(2));


const totalSum = Number((formatedPrice + tipAmount).toFixed(2));

const message = `Check number: ${formatedPrice}\nTip: ${formatedTip}%\nTip amount: ${tipAmount}\nTotal Sum: ${totalSum}`;
alert(message);

let inputValue = null;
console.log(typeof inputValue);

const x = 5;
const y = 10;

console.log((x + y) / x);

console.log(Math.random() * (10 - 1) + 1);