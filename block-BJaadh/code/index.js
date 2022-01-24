// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(" ");

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
strings.filter(function (element) {
  if(element.includes("is")) {
    console.log(element);
  }
})

// - Find all the words that contain 'is' use string method 'indexOf'
strings.filter(function (element) {
  if(element.indexOf("is") !== -1) {
    console.log(element);
  }
})


// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every (function (number) {
  return number % 3 === 0;
})

// -  Sort Array from smallest to largest
let sortedNumbers = [...numbers].sort(compare);
function compare (a, b) {
  return  a - b;
}
console.log(sortedNumbers);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
let largestNumber = [...numbers].sort(compareMax);
function compareMax (a, b) {
  return  b - a;
}
console.log (largestNumber[0]);

// - Find longest string in strings
let longestString = [...strings].sort(compareMaxString);
function compareMaxString (a, b) {
  return b.length - a.length;
}
console.log(longestString[0]);

// - Find all the even numbers
let evenNumbers = numbers.filter(eve);
function eve (num) {
  return num % 2 === 0;
}
console.log (evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter(odd);
function odd (num) {
  return num % 2 !== 0;
}
console.log (oddNumbers);


// - Place a new word at the start of the array use (unshift)
strings.unshift("Hello!");

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));

// - Replace 12 & 18 with 1221 and 1881
let  = numbers.map((num) => {
  if (num === 12) {
    return 1221;
  } else if (num === 18) {
    return 1881;
  } else {
    return num;
  }
})

// - Replace words in strings array with the length of the word
let stringLength = strings.map (length);
function length (word) {
  return word.length;
}

// - Find the sum of the length of words using above question
let sumLength = stringLength.reduce((acc, num) => {
  return acc += num;
}, 0);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
let jNames = customers.filter((cux) => {
  if (cux.firstname.startsWith("J")) {
    return cux.firstname;
  }
})

// - Create new array with only first name
let firstNames = customers.map((cux) => {
  return cux.firstname;
})

// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map((cux) => {
  return cux.firstname + " " + cux.lastname;
})

// - Sort the array created above alphabetically
fullNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

let newArray = firstNames.filter(includesVowel);

function includesVowel (string) {
  if (string.includes("a") || string.includes("e") || string.includes("i") || string.includes("o") || string.includes("u")) {
    return string;
  }
}