let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (grade) {
    this.grades.push(grade);
  },
  computeAverageGrade: function () {
    const sum = this.grades.reduce(
      (accumulator, grade) => accumulator + grade,
      0
    );
    return sum / this.grades.length;
  },
};

let student1 = Object.create(student);
student1.firstName = "davies";
student1.lastName = "davies";
student1.grades = [];
student1.inputNewGrade(20);
student1.inputNewGrade(30);

let student2 = Object.create(student);
student2.firstName = "wabuluka";
student2.lastName = "wabuluka";
student2.grades = [];
student2.inputNewGrade(39);
student2.inputNewGrade(50);

let students = [student1, student2];

//general average

const generalAverage =
  students.reduce((a, student) => a + student.computeAverageGrade(), 0) /
  students.length;

console.log(generalAverage);
