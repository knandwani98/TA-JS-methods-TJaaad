let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let averageGrades = persons.map((people) => people.grade).reduce((occ, num) => occ + num / persons.length , 0)

// Find the average grade of male
let allMale = persons.filter((people) => people.sex === "M")
let averageGradeMale = allMale.map((index) => index.grade).reduce((occ, num) => occ + num / allMale.length , 0)

// Find the average grade of female
let allFemale = persons.filter((people) => people.sex === "F")
let averageGradeFemale = allFemale.map((index) => index.grade).reduce((occ, num) => occ + num / allFemale.length , 0)

// Find the highest grade
let highestGrade = persons.map((people) => people.grade).reduce((occ, num) => occ < num ? num : occ , 0)

// Find the highest grade in male
let highestGradeMale = allMale.map((people) => people.grade).reduce((occ, num) => occ < num ? num : occ , 0)


// Find the highest grade in female
let highestGradeFemale = allFemale.map((people) => people.grade).reduce((occ, num) => occ < num ? num : occ , 0)


// Find the highest grade for people whose name starts with 'J' or 'P'
let nameOfJP = persons.filter((person) => person.name.startsWith("J") || person.name.startsWith("P"))
let highestGradeJP = nameOfJP.map((people) => people.grade).reduce((occ, num) => occ < num ? num : occ , 0)


const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let fruitsObj = fruitBasket.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let newArr = [];
Object.keys(fruitsObj).reduce((acc, num) => {
  return acc = newArr.push([num, fruitsObj[num]],[]) + 1;
}, [])

console.log(newArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let flat = data.reduce((acc, value) => acc.concat(value), [])

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let flatten = (arr) => {
  newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)){
     acc = acc.concat(flatten(item));
    } 
    else {
      acc.push(item);
    }
    return acc;
  }, [])
  return newArr;
}
console.log (flatten(dataTwo));
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let increment = (value) => value + 1;
let double = (value) => value * 2;
let decrement = (value) => value - 1;
let triple = (value) => value * 3;
let half = (value) => {
  let final = value / 2;
  return Math.round(final);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.  

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
console.log(pipeline.reduce((acc, item) => {
  acc = item(acc);
  return acc;
}, 3)) // 13

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
console.log(pipeline2.reduce((acc, item) => {
  acc = item(acc);
  return acc;
}, 8)) // 165

