function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function (grade) {
  return this.grades.push(grade);
};

Student.prototype.computeAverageGrade = function () {
  return this.grades.reduce((a, grade) => a + grade, 0) / this.grades.length;
};

let student1 = new Student("Davies", "Davies");
let student2 = new Student("wabuluka", "wabuluka");

student1.inputNewGrade(30);
student1.inputNewGrade(80);
console.log(student1.computeAverageGrade());
let students = [student1, student2];
student2.inputNewGrade(90);
student2.inputNewGrade(70);
console.log(student2.computeAverageGrade());
console.log(students);

const generalAverage =
  students.reduce((a, student) => a + student.computeAverageGrade(), 0) /
  students.length;
console.log(generalAverage);
