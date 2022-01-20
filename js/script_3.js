//1) const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// const spliceB = b.splice(0, 1);
// console.log(spliceB);
// console.log(b);
// const result = a.concat(c, spliceB, b[0] );
// console.log(result);


//2) const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const result = a.splice(3, 3, a[0], a[1], a[2]);
// console.log(a);

// const result = a.copyWithin()

// 3)
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const replace = a.splice(5, 3, 0, 0, 0,);
// const replace = a.fill(0, 5, 8);
// console.log(a);

// 4)
// const a = [1, 2, [3, 4], [5, 6], 7];

// 4.1)
// console.log(a.flat());

// let b = [];

// for (const i of a) {
//     if (Array.isArray(i)) {
//         b.push(i[0], i[1]);
//     } else {
//         b.push(i)
//     }
// }

// console.log(b);
// Result: [1, 2, 3, 4, 5, 6, 7]

// 5)
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']

// for (const i of a) {
//     if (a[i] === 'n') {
//         console.log(i);
//     } 
// }

// 5.1)
// const result = a.lastIndexOf('n');
// const result = a.length - a.reverse().indexOf('n') - 1;


// const a = [1, 2, 3, 4, 5, 6, 7]
// let b = [];

// for (let i = a.length - 1; i >= 0; i -= 1) {
//     b.push(a[i]);
// }

// console.log(b);

// a.reverse();
// console.log(a);
// Result: [7, 6, 5, 4, 3, 2, 1]

// const a = 'alona'

// console.log(a.split(''));

// console.log(Array.from(a));
// Result: ['a', 'l', 'o', 'n', 'a']
const a = ['a', 'l', 'o', 'n', 'a'];
const b = a.toString('');
const c = b.replaceAll(',', '');
const d = c[0].toUpperCase();

console.log(c.replace('a', d));



const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
console.log(colors.splice(1, 1));