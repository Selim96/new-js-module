const getSum = numbers => numbers.reduce((acc, num) => acc + num);

const getSortedStrings = strings =>
  strings.sort((a, b) => a.localeCompare(b)).join(' ');

export { getSum, getSortedStrings };