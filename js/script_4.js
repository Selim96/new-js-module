// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321

// function reverses(stt) {
//   if (stt < 0) {
//     stt *= -1;
//   }
//   stt = String(stt);
//   let res = "";
//   for (i = stt.length; i >= 1; i -= 1) {
//     res += String(i);
//   }
//   return Number(res);
// }

// console.log(reverses(12345));


// const a = -12345;

// function reverseNumber(arg) {

//     let number;

//     if (arg < 0) {
//         number = arg * -1;
//     }
//     const strA = arg.toString();

//     const arrParam = b.split('');
//     console.log(arrParam);

//     const reverseArr = [];

//     if (arrParam[0] === '-') {
//         for (let i = arrParam.length-1; i >= 1; i -= 1) {
//         reverseArr.push(arrParam[i]);

//         console.log(reverseArr);
//     } 
//     }
//     const nweStr = reverseArr.toString();

//     console.log('-' + nweStr.)
// }


// // Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// // It should return an array of converted values.
// // console.log(convert("1", 2, 3, "4"));
 // [1, '2', '3', 4]
let newArray = [];
function convert(...args) {
    
    for (let i = 0; i < args.length; i += 1) {
        
        if (typeof args[i] === 'string') {
            newArray.push(Number(args[i]));
        } else {
            newArray.push(String(args[i]));
        }
    }
    
    return newArray;
    
}
console.log(convert('1', 2, 3, '4'));

// function containsValue (array, )
