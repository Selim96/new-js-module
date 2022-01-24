// function generateStatus() {
//     const x = Math.random()
//     console.log(x);
//     if (x <= 0.5) {
//         return true;
//     }
//     return false;
    
// }

// console.log(generateStatus());
// console.log(generateStatus());
// console.log(generateStatus());

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  const keys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
  propCount = keys.length;
  // Change code above this line
  return propCount;
};
    
console.log(countProps({ df: 23, rr: 25, ter: 5, }));