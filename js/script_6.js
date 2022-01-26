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

// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//   for (let item of array) {
    
//     callback(item);
//   }
// }

// //2) containsValue([2, 5, 8], 2)  // returns true
// // containsValue([12, 4, 6], 5)  // returns false

// const containsValue = (array, value) => {
//   array.forEach(item => )
// }

//3) substitute([58, 14, 48, 12, 31, 19, 10]);
// returns [58, '*', 48, '*', 31, '*', 10]

// const substitute = (array) => {
//   const newArray = [];
//   array.forEach(elem => {
//     if (elem > 10 && elem < 20) {
//       newArray.push('*');
//     } else {
//       newArray.push(elem);
//     }
//   });
//   return newArray;
// }

// substitute([58, 14, 48, 12, 31, 19, 10]);

// таже задача через .map

// const substitute = array => array.map(elem => (elem < 20 && elem > 10 ? '*' : elem));

// console.log(substitute([58, 14, 48, 12, 31, 19, 10]));
// ---------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = null;
// for (const product of products) { 
  
//   if (product['name'] === productName) {
//     price = product['price'];
//     return price;
//   } continue;
  
// }
//  return price; 
//   // Change code above this line
// }

// console.log(getProductPrice("radar"));
// ---------------------------------------------------

// function getAllPropValues(propName) {  
//   const array = [];
//   for (const object of products) {
//     const keys = Object.keys(object);
//     console.log(keys);
//     if (keys.includes(propName)) {
//       array.push(object[propName]);
//     } 
//   return array; 
//   }
// return array;
  
// }

// console.log(getAllPropValues('category'));
// --------------------------------------------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const object of this.potions) {
      if (newPotion.name === object.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const object of this.potions) {
      const potionIndex = this.potions.indexOf(object);
      if (object.name === potionName) {        
        this.potions.splice(potionIndex, 1);
        return;
      } 
        
      }            
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const object of this.potions) {
      if (object.name !== oldName) {
        return `Potion ${oldName} is not in inventory!`;
      } 
      object.name = newName;
      return;
    }
  return;
  },
  // Change code above this line
};

console.log(atTheOldToad.removePotion("Speed potio"));
console.log(atTheOldToad.potions);

console.log(atTheOldToad.updatePotionName("Speed potions", "RRRRRRRRR"));