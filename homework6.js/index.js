//? Task 1 Start:

// class Empoyee {
//   constructor(name, age, position, salary) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.salary = salary;
//   }

//   promote(newPosition, salaryIncrement) {
//     this.position = newPosition;
//     this.salary += salaryIncrement;
//     console.log(
//       `${this.name} has been promoted to ${newPosition} with a salary increment of ${salaryIncrement}$. New salary is ${this.salary}$.`
//     );
//   }

//   displayInfo() {
//     console.log(
//       `Name:${this.name}, Age:${this.age}, Position:${this.position},Salary:${this.salary}$`
//     );
//   }

//   birthday() {
//     this.age++;
//     console.log(
//       `Happy birthday, ${this.name}! You are now ${this.age} years old.`
//     );
//   }
// }

// const person = new Empoyee("John", 38, "Administrative assistant", 2000);
// person.displayInfo();
// person.birthday();
// person.promote("CEO", 3000);

//? Task 1 End.

//? Task 2 Start:

// let arr = [];

// for (let i = 0; i < 5; i++) {
//   const input = +prompt("Enter elements of array:");
//   if (isNaN(input)) {
//     alert("Please enter a  number.");
//   }
//   arr.push(input);
// }

// console.log(arr);

// const findSecondSmallest = () => {
//   arr.sort((a, b) => a - b);
//   console.log("arr", arr);
//   return arr[1];
// };

// console.log(findSecondSmallest());

//?  Task 2  End.

//? Task 3 Start:

// let arr = [
//   { name: "John", score: 420 },
//   { name: "Jim", score: 220 },
//   { name: "Mary", score: 545 },
//   { name: "Mark", score: 613 },
//   { name: "Stephen", score: 678 },
//   { name: "Amanda", score: 387 },
// ];

// const highestScore = () => {
//   let sortedArr = arr.slice();
//   sortedArr.sort((a, b) => a.score - b.score);
//   return sortedArr[sortedArr.length - 1];
// };

// console.log(highestScore());
// console.log(arr);

//? Task 3 End.

//? Task 4 Start:

// let arr = [];

// for (let i = 0; i < 5; i++) {
//   const input = +prompt("Enter elements of array:");
//   if (isNaN(input)) {
//     alert("Please enter a  number.");
//   }
//   arr.push(input);
// }
// console.log(arr);

// const countHighestFrequency = (arr) => {
//   let highestNumber = Math.max(...arr);
//   console.log(highestNumber);
//   let frequency = arr.reduce((acc, curr) => {
//     if (curr == highestNumber) {
//       acc++;
//     }
//     return acc;
//   }, 0);
//   return frequency;
// };

// console.log(countHighestFrequency(arr));


//? Task 4 End.