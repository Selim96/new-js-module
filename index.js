// var validator = require('validator');

// console.log(validator.isEmail('foo@bar.com')); //=> true
// console.log("hi");

// // import './js/modules.js';

// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setInterval(greet, 1000);

// console.log(timerId);
// // clearTimeout(timerId);
// clearInterval(timerId);
// -------------------------------------
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
  
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
  
// });

// console.log("Before ");

// promise.then(value => {
//   console.log(value);
// },
//   error => {
//     console.log(error);
//   }
// ).finally(() => console.log("Promise settled"));

// console.log("After!");

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

import { newFunction } from "./js/classes.js";
newFunction();