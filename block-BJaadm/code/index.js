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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map ((arr) => arr.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map ((arr) => arr.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map ((arr) => arr.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log (peopleName.filter((arr) => {
  if(arr.toUpperCase().startsWith("J") || arr.toUpperCase().startsWith("P")) {
    return arr;
  }
}))

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let nameWithAC = peopleName.filter((arr) => arr.toUpperCase().startsWith("A") || arr.toUpperCase().startsWith("C"));
console.log(nameWithAC.map((w) => w.length));

// Log all the filtered male ('M') in persons array
console.log (persons.filter((word) => word.sex === "M"))

// Log all the filtered female ('F') in persons array
console.log (persons.filter((word) => word.sex === "F"))


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log (persons.filter((arr) => arr.name.toUpperCase().startsWith("A") || arr.name.toUpperCase().startsWith("C") && arr.sex === "F"));

// Log all the even numbers from peopleGrade array
console.log (peopleGrade.filter((w) => w % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
let nameFromJ = persons.filter((w) => w.name.toUpperCase().startsWith("J"));
console.log(nameFromJ[0]);

// Find the first name that starts with 'P' in persons array and log the object
let nameFromP = persons.filter((w) => w.name.toUpperCase().startsWith("P"));
console.log(nameFromP[0]);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let grade10 = persons.filter((w) => w.name.toUpperCase().startsWith("J") && w.sex === "F" && w.grade > 10);
console.log (grade10[0]);


// Filter all the female from persons array and store in femalePersons array
let allFemales = persons.filter((word) => word.sex === "F")

// Filter all the male from persons array and store in malePersons array
let allMales = persons.filter((word) => word.sex === "M")

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, num) => acc + num, 0);

// Find the average grade
let averageGrades = peopleGrade.reduce((acc, num) => acc + num / peopleGrade.length, 0);

// Find the average grade of male
let averageGradesOfMale = allMales.map((person) => person.grade).reduce((acc, num) => acc + num / allMales.length, 0);

// Find the average grade of female
let averageGradesOfFemale = allFemales.map((person) => person.grade).reduce((acc, num) => acc + num / allFemales.length, 0);

// Find the highest grade
let highestGrade = [...persons.map((i) => i.grade)].sort((a,b) => a - b).pop();

// Find the highest grade in male
let highestGradeMale = [...allMales.map((i) => i.grade)].sort((a,b) => a - b).pop();

// Find the highest grade in female
let highestGradeFemale = [...allFemales.map((i) => i.grade)].sort((a,b) => a - b).pop();


// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeOfJP = [...persons.filter((j) => j.name.toUpperCase().startsWith("J") || j.name.toUpperCase().startsWith("P")).map((i) => i.grade)].sort((a,b) => a - b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();

