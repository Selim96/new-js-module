// var validator = require('validator');

// console.log(validator.isEmail('foo@bar.com')); //=> true
console.log("hi");

// import './js/modules.js';

const greet = () => {
  console.log("Hello!");
};

const timerId = setInterval(greet, 1000);

console.log(timerId);
// clearTimeout(timerId);
clearInterval(timerId);