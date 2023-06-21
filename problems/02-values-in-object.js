/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

/* // using for...in loop
function valuesInObject(obj) {
  // empty array
  let arr = [];

  // iterate over keys in obj
  for (let key in obj) {
    // push key value to arr
    arr.push(obj[key]);
  }
  
  return arr;
} */

// using Object.values
function valuesInObject(obj) {
  return Object.values(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;