// 1-st way
const createTitleMarkup = (names, sum) =>
  `<h2>${names} got $${sum} all together</h2>`;

export default createTitleMarkup;

// 2-st way
// export default (names, sum) => `<h2>${names} got $${sum} all together</h2>`;
