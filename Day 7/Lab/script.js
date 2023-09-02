// Task 1 - Check if input is an array
function isArray(input) {
  return Array.isArray(input);
}

// Example usage:
const arr = [1, 2, 3];
const notArr = "Hello";
console.log(isArray(arr)); // true
console.log(isArray(notArr)); // false

//   Task 2 - Find the most frequent item in an array

function mostFrequent(arr) {
  const freqMap = {};
  let maxCount = 0;
  let mostFrequentItem = null;

  for (const item of arr) {
    freqMap[item] = (freqMap[item] || 0) + 1;
    if (freqMap[item] > maxCount) {
      maxCount = freqMap[item];
      mostFrequentItem = item;
    }
  }

  return mostFrequentItem;
}

// Example usage:
const array = [1, 2, 2, 3, 3, 3, 4];
console.log(mostFrequent(array)); // 3

// Task 3 - Complete sum and product of an array

function sumAndProduct(arr) {
  let sum = 0;
  let product = 1;

  for (const num of arr) {
    sum += num;
    product *= num;
  }

  return { sum, product };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = sumAndProduct(numbers);
console.log(`Sum: ${result.sum}, Product: ${result.product}`);

//   Task 4 - Get the nth Largest Element from an Array:

function nthLargest(arr, n) {
  const sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[n - 1];
}

// Example usage:
const data = [10, 23, 5, 7, 42, 56];
const nth = 3;
console.log(nthLargest(data, nth)); // 10 (the 3rd largest element)

// Question 1 - Difference between Map and Object

// Map: Maps are data structures in JavaScript that allow you to store key-value pairs. They are more versatile and can have keys of any data type, including objects and functions. Maps maintain the order of elements and provide methods for easy manipulation and iteration.

// Object: Objects are also data structures that store key-value pairs. However, keys in objects are limited to strings and symbols. Objects are commonly used for more general-purpose data storage and as prototypes for creating other objects.

// Question 2 - var vs. let vs. const:

// var: var is used to declare variables in JavaScript. It has function scope, which means it is only limited to the function it is declared in. It is also hoisted, meaning it's moved to the top of its containing function or global scope during compilation. It can be re-declared and updated.

// let: let is used to declare block-scoped variables. It is not hoisted, so it's only accessible after the line where it's declared. It can be updated but not re-declared in the same scope.

// const: const is used to declare variables that cannot be re-assigned after their initial value is set. Like let, it is block-scoped and not hoisted. It's a good choice when you want to create variables with values that should not change during the program's execution.
