let fruits = ["apple", "orange", "pineapple", "mango"];
let numbers = [1,2,3,4,5];

fruits.push("grap");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("chery");
console.log(fruits);

fruits.shift();
console.log(fruits);

hasapple = fruits.includes("apple");
hasbanana = fruits.includes("banana");

console.log(hasapple , hasbanana);

fruits.forEach(fruit => console.log(`some texts go brr : ${fruit}`));