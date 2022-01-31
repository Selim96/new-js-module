// const a = 5;
// const b = 10;
// const number = prompt('Enter your number');


// function isNumberInRange(start, end, number) {
  
//   if(number >= start && number <= end) {
//     alert(`Your number ${number} is in range`);
//     return number;
//   }
//    // Change this line
//   alert('The number is not in range');
//   return ;
// }

// console.log(isNumberInRange(a, b, number));

// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }
//   console.log("Операция снятия средств проведена");
// }

// withdraw(600, 500);

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longestWord;
// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];

//   }

// }

// }


// const words = ['sea', 'world', 'game', 'tablee', 'book'];
// console.log(words[3].length);

// let longestWord = '';
// console.log(longestWord.length);
// const a = words[3].length > longestWord.length;
// console.log(a);


// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];

//   }

// }

// function filterArray(numbers, value) {
   
//   let eee = [];
  
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       eee.push(numbers[i]);
//       console.log(eee);
//     }
//   }
//   return eee;

//   // Change code above this line
// }

// filterArray([1, 5, 8, 3, 2, 7], 6);

// function filterArray(numbers, value) {
//   let eee = [];
//   numbers.forEach(numbers[i] > value ? console.log(eee.push(numbers[i])) : return;)

//   return eee;

//   // Change code above this line
// }
// ---------------------------------------------------------
// const numbers = [1, 5, 8, 3, 2, 7];
// const value = 6;

// numbers.forEach((number) =>
//   (number > value) ? console.log(number) : console.log(`This ${number} is less than ${value}`));

// numbers.forEach( (number, index) => console.log(`Индекс ${index}, значение ${number}`));
// -----------------------------------------------------------

// class Storage {
//    constructor ([...items]) {
//        this.items = [...items];
//    }
//    getItems() {
//        return this.items;
//    }
//    addItem(newItem) {
//        return this.items.push(newItem);
//    }
//    removeItem(itemToRemove) {
//        const index = this.items.indexOf(itemToRemove);
//        return this.items.splice(index, 1);
//    }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// --------------------------------------------------------------

class StringBuilder {
    constructor(initialValue) {
        return this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    padStart(str) {
        return this.value = str + this.value;
    }
    padEnd(str) {
        return this.value = this.value + str;
    }
    padBoth(str) {
        return this.value = str + this.value + str;
    }
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="