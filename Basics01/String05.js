

let name="Chetan"
let count=10

console.log(`Hi this is ${name}, and count is ${count}`);


// CharAT
let str1= "Hello";
let char = str.charAt(1);  // Returns 'e'
console.log(char);


// Concat
let str2 = "Hello";
let str3= "World";
let result = str1.concat(" ", str2);  // Returns 'Hello World'
console.log(result);


// Includes
let str4 = "Hello, welcome to JavaScript!";
let hasWelcome = str.includes("welcome");  // Returns true
console.log(hasWelcome);



// Slice 
let str5 = "JavaScript";
let sliced = str.slice(0, 4);  // Returns 'Java'
console.log(sliced);


// Indexof 
let str6 = "JavaScript is awesome!";
let index = str.indexOf("awesome");  // Returns 16
console.log(index);


// Startwith 
let str7 = "JavaScript is fun";
let starts = str.startsWith("Java");  // Returns true
console.log(starts);


// Substrinh 
let str8 = "JavaScript";
let substr = str.substring(4, 10);  // Returns 'Script'
console.log(substr);


// split 
let str9 = "apple,banana,cherry";
let fruits = str.split(",");  // Returns ['apple', 'banana', 'cherry']
console.log(fruits);


// ToLowerCase
let str10 = "Hello World!";
let lower = str.toLowerCase();  // Returns 'hello world!'
console.log(lower);


// Replace
let str11 = "I love cats!";
let replaced = str.replace("cats", "dogs");  // Returns 'I love dogs!'
console.log(replaced);
