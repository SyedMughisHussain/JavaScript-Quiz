//! Objects

//* Problem 1
// Create an object 'person' with properties 'name' and 'age'. Then, write a function 'displayPersonInfo' that takes the person object as an argument and displays the name and age.

const person = {
  name: "Mughis",
  age: 20,
};

function displayPersonInfo(obj) {
  console.log(Object.entries(obj));
}
displayPersonInfo(person);

//* Problem 2
// Create an array 'students' with objects representing students. Each student should have 'name' and 'score' properties. Write a function 'findTopStudent' that finds and displays the student with the highest score.

let students = [
  { name: "Syed Mughis", score: 100 },
  { name: "Syed Haseeb", score: 120 },
  { name: "Syed Mubbashir", score: 90 },
];

function findTopStudent(arrOFStudents) {
  let firstObj = arrOFStudents[0];
  let secondObj = arrOFStudents[1];
  let thirdObj = arrOFStudents[2];
  if (firstObj.score > secondObj.score && firstObj.score > thirdObj.score) {
    return firstObj;
  } else if (
    secondObj.score > firstObj.score &&
    secondObj.score > thirdObj.score
  ) {
    return secondObj;
  } else {
    return thirdObj;
  }
}
findTopStudent(students);

//! Arrays

//* Problem 3
// Write a function 'calculateAverage' that takes an array of numbers and calculates and displays the average value.

function calculateAverage(arrOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sum += arrOfNumbers[i];
  }
  return sum / arrOfNumbers.length;
}

let arr = [100, 100, 100, 100];
calculateAverage(arr);

//* Problem 4
// Create an array 'fruits' and sort it in alphabetical order. Then, display the sorted array.

let fruits = ["Orange", "Mango", "Apple", "Strawberry", "Watermelon"];
console.log(fruits.sort());

//! Functions

//* Problem 5
// Write a function 'factorial' that calculates and displays the factorial of a number.

//* Problem 6
// Create a function 'reverseString' that takes a string as input and displays the reverse of the input string.

let myFunction = function(string) {
  let value = '';
  for (let i = string.length - 1; i >= 0; --i) {
    const element = string[i];
    value += element;
  }
  return value;
}
myFunction("HelloWorld"); 


//! Constructor Function

//* Problem 7
// Create a constructor function 'Person' that takes 'name' and 'age' as parameters and creates person objects. Then, create two person objects and display their details.

function Person(name,age){
  this.name = name;
  this.age = age;
}

const p1 = new Person('Syed Mughis Hussain',20);
const p2 = new Person('Syed Haseeb Hussain',18);
console.log(p1);
console.log(p2);

//! Loops

//* Problem 8
// Write a loop that displays numbers from 1 to 10.

for (let i = 1; i <= 10 ; i++) {
  console.log(i);
}

//* Problem 9
// Write a function 'sumArrayElements' that calculates and displays the sum of elements in an array of numbers.

function sumArrayElements(arrOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sum += arrOfNumbers[i];
  }
  return sum;
}
let numbers = [10,20,30,40,50,60];
sumArrayElements(numbers);

//! If-Else Statements

//* Problem 10
// Write a function 'isEven' that takes a number as input and displays whether the number is even or odd.

function isEven(number){
  if(number % 2 === 0){
    return `${number} is Even!`
  }
  else{
    return `${number} is Odd!`
  }
}
isEven(2);

//* Problem 11
// Write a function 'checkVotingEligibility' that takes a person's age as input and displays whether the person is eligible to vote (18 years or older).

function checkVotingEligibility(age){
  if(age >= 18){
    return `Eligible to vote!`
  }
  else{
    return `Not Eligible to vote!`
  }
}
checkVotingEligibility(15)

//! Date

//* Problem 12
// Write a function 'displayCurrentDateTime' that displays the current date and time.

function displayCurrentDateTime(){
  return Date();
}
displayCurrentDateTime();

//! Numbers

//* Problem 13
// Write a function 'isPrime' that takes a number as input and displays whether the number is prime or not.

function isPrime(number){
  if(number){
    return `Number is prime`
  }
  else{
    return `Number is not prime`
  }
}
isPrime(2);

//* Problem 14
// Write a function 'squareNumbers' that takes an array of numbers, squares each number, and displays the squared values.

function squareNumbers(arr){
  let result = [];
  for(let i=0; i < arr.length; i++){
    const element = array[i];
    let re = Math.pow(element,2);
    result.push(re);
  }
  return result;
}
let array = [2,3,2,2,3,4];
squareNumbers(array);

//! Strings

//* Problem 15
// Write a function 'countVowels' that takes a string as input and displays the count of vowels (a, e, i, o, u) in the string.

function countVowels(string){
  
}

//! DOM Manipulation

//* Problem 16
// Create an HTML button with the text "Click Me" and a <div> element. When the button is clicked, change the text of the <div> to "Button Clicked!".

//* Problem 17
// Create an HTML form with an input field and a submit button. When the form is submitted, display an alert with the text entered in the input field.
