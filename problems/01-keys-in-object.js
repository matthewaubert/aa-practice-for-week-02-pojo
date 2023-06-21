/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

/* // using for...in loop
function keysInObject(obj) {
  // empty array
  let arr = [];

  // iterate over obj with for...in loop
  for (let key in obj) {
    // push key to arr
    arr.push(key);
  }
  
  return arr;
} */

// using Object.keys
function keysInObject(obj) {
  return Object.keys(obj);
}

// let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
// console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;