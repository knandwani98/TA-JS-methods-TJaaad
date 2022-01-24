let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord (arr) {
  let longestWord = [...arr].sort((a,b) => {
    return a.length - b.length;
  });
  return longestWord.pop();
}

findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.
words.map((word) => { 
  return word.length; 
})

// - Create a new array that only contains word with atleast one vowel.
let atLeastVowel = words.filter(checkVowel);

function checkVowel (word) {
  return word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u");
}

// - Find the index of the word "rhythm"
let isRhythm = words.findIndex((word) => {
  return word === "rhythm";
})

// - Create a new array that contians words not starting with vowel.
let notStartWithVowel = words.filter((word) => !checkVowel(word[0]));

// - Create a new array that contianse words not ending with vowel
let notEndsWithVowel = words.filter((word) => !checkVowel(word[word.length - 1]));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray (arr) {
  return arr.reduce((acc, num) => {
  return acc + num;
  }, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.filter((num) => {
  return num % 3 === 0;
})

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
})

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((num) => {
  return num % 2 !== 0;
})

// - Create a new array that should have true for even number and false for odd numbers.
let newArray = numbers.map((num) => {
  return num % 2 === 0;
})


// - Sort the above number in assending order.
numbers.sort((a,b) => {
  return a - b;
})

// - Does sort mutate the original array?
// Yes 

// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);


//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers (arr) {
  let sum = arr.reduce((acc, num) => {
    return acc + num;
    }, 0);
    return sum / arr.length;
}


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength (arr) {
  let words2 = arr.map((ele) => {
    return ele.length;
  })
  return words2.reduce((acc, num) => {
    return acc + num;
  }, 0) / arr.length;
}