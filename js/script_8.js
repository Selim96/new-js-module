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

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Maggy", "a"));

// const letterCount = (str, lett) =>
// 	str
// 		.toLowerCase()
// 		.split("")
// 		.reduce((acc, letter) => (letter === lett ? acc + 1 : acc), 0);

// getSums([1, 2, 3, 4, 5]) из полученого масива получить масив элементов, где начиная со 2-го - это результат суммирования предыдущего числа с текущим;
[1, 3, 6, 10, 15]

// function getSums(arr) {
//   const newArr = [];
//   arr.reduce((prev, elem) => {
//     newArr.push(prev + elem);
//     return prev + elem;
//   }, 0);
//   return newArr;
// }

// console.log(getSums([1, 2, 3, 4, 5]));

// ===============================================================
import throttle from "lodash.throttle";

const form = document.createElement('form');
const nameInput = document.createElement('input');
const textArea = document.createElement('textarea');
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.type = 'submit'

const root = document.querySelector('#root');

const STORAGE_KEY = 'feetback';

const formData = {};

root.append(form);
form.append(nameInput, textArea, submitBtn);
root.classList.add("root");
form.classList.add("form");
nameInput.classList.add("name");
nameInput.name = 'nameInput';
textArea.name = 'textArea';

populateForm();

form.addEventListener('submit', onSubmitForm);
// textArea.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('input', onFormInput);

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  for (key in formData) {
    formData[key] = "";
  }
};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
  console.log(formData);
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(STORAGE_KEY, message);
};

function populateForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  const savedFormParsed = JSON.parse(savedForm);

  if (savedForm) {
    const formChildren = Object.values(form);
    formChildren.forEach(elem => {
      if (savedFormParsed[elem.name]) {
        elem.value = savedFormParsed[elem.name];
        formData[elem.name] = savedFormParsed[elem.name];
      } 
    })

    // nameInput.value = savedFormParsed.nameInput;
    // textArea.value = savedFormParsed.textArea;
    console.log( formData)
  }
}