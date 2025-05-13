// Qtn1
// const numbers = [1, 5, 18, 77, 108];
// numbers.filter((x) => x % 2 !== 0).forEach((x) => console.log(x));

// Qtn2
function sum(arr) {
  return arr.filter((x) => x > 20).reduce((a, current) => a + current, 0);
}
// console.log(sum([10, 20, 50, 30, 8]));

let getNewArray = function (arr) {
  return arr.filter((x) => x.length >= 5).filter((x) => x.includes("a"));
};
// console.log(
//   getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"])
// );

var a = 2;
let b = 3;
function outer() {
  let c = 5;
  var d = 7;
  return function inner() {
    b = 8;
    let c = 9;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  };
}
// outer()();

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

// let result = students
//   .filter((e) => e.courses.includes("cs303"))
//   .reduce((acc, student) => {
//     let avg =
//       student.grades.reduce((sum, grade) => sum + grade, 0) /
//       student.grades.length;
//     acc[student.name] = avg;
//     return acc;
//   }, {});
// console.log(result);
var studentArr = new Map();
let result = students
  .filter((e) => e.courses.includes("cs303"))
  .map((student) => {
    let avg =
      student.grades.reduce((acc, grade) => acc + grade, 0) /
      student.grades.length;
    console.log(avg);
    studentArr.set(student.name, avg);
  });
console.log(studentArr);
