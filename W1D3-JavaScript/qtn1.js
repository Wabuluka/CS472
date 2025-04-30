"use strict";
const computeSumOfSquares = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, num) => {
    if (typeof num !== "number") {
      throw new Error("Array must contain only numbers");
    }
    return Math.pow(num, 2) + sum;
  }, 0);
};

console.log(computeSumOfSquares([1, 2, 3]));

function printOddNumbersOnly(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.filter((num) => num % 2 !== 0);
}
console.log(printOddNumbersOnly([1, 2, 3, 4, 5]));

const printFibo = function (n, a, b) {
  if (n <= 0) {
    return;
  }
  console.log(a);
  printFibo(n - 1, b, a + b);
};
printFibo(6, 0, 1);
