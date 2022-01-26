// 1вариант: 
const positiveSum = (args) => {
  return args.reduce((total, element) => {
    if (element >= 0) {
      return total + element;
    }
    return total;
  }, 0);
};

// ---------------------------------------

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (string1, string2) => {
//     const firstArray = [...string1.toLowerCase()];
//     const arg = string2.toLowerCase();
//     const filteredArray = firstArray.filter((element) => element === arg);
    
//     return filteredArray.length;
// };

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Maggy", "a"));

// const letterCount = (string1, string2) => {
//     const firstArray = [...string1.toLowerCase()];
//     const arg = string2.toLowerCase();
//     return firstArray.filter((element) => element === arg).length;
// };

// самый короткий вариант-----------------------------
// const letterCount = (str, s) =>
//   str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === s.toLowerCase()).length;

// вариант без фильтра (с редьюз)---------------------
// const letterCount = (string1, string2) => {
//     const firstArray = [...string1.toLowerCase()];
//     const arg = string2.toLowerCase();
//     return firstArray.reduce((total, elem) => {
//         if (elem === arg) {
//             return total + 1;
//         }
//         return total;
//     }, 0);
// };

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Maggy", "a"));

// -----------------------------------------------------
const letterCount = (string1, string2) => [...string1.toLowerCase()].reduce((total, elem) => elem === string2.toLowerCase() ? total + 1 : total, 0);

console.log(letterCount("Maggy", "g"));
console.log(letterCount("Maggy", "a"));

// const letterCount = (str, lett) =>
// 	str
// 		.toLowerCase()
// 		.split("")
// 		.reduce((acc, letter) => (letter === lett ? acc + 1 : acc), 0);

// getSums([1, 2, 3, 4, 5]) из полученого масива получить масив элементов, где начиная со 2-го - это результат суммирования предыдущего числа с текущим;
[1, 3, 6, 10, 15]
