// ARRAY MANIPULATION ASSIGNMENT
console.log("===== Array Manipulation =====");

// Task 1: Adding and Removing Elements
let fruits = ["apple", "banana", "orange"];
console.log("Initial fruits:", fruits);

fruits.push("grape"); // Adding element
console.log("After push:", fruits);

fruits.pop(); // Removing the last element
console.log("After pop:", fruits);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
console.log("Unsorted numbers:", numbers);

numbers.sort((a, b) => a - b); // Sorting in ascending order
console.log("Sorted numbers:", numbers);

// Task 3: Applying Array Methods
let nums = [3, 1, 5, 2, 4];
console.log("Original numbers:", nums);

// Using map to double the numbers
let doubled = nums.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Using filter to remove even numbers
let oddNumbers = nums.filter(num => num % 2 !== 0);
console.log("Filtered odd numbers:", oddNumbers);

// Using reduce to calculate the sum of all numbers
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

console.log("===== End of Array Manipulation =====\n");

// STRING MANIPULATION ASSIGNMENT
console.log("===== String Manipulation =====");

// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log("Message:", message);
console.log("Length of message:", message.length);

// Task 2: Converting Cases
let text = "Hello, World!";
console.log("Original text:", text);

let upperText = text.toUpperCase();
console.log("Uppercase text:", upperText);

let lowerText = text.toLowerCase();
console.log("Lowercase text:", lowerText);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Original sentence:", sentence);

let substring = sentence.substring(4, 9); // Extracting "quick"
console.log("Extracted substring:", substring);

// Task 4: Splitting Strings
let words = "The quick brown fox";
console.log("Original words:", words);

let splitWords = words.split(" ");
console.log("Split into array:", splitWords);

console.log("===== End of String Manipulation =====");
