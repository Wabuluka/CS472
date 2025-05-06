function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (givenAns) {
  return this.answer === givenAns;
};

function Student(stdId) {
  this.studentId = stdId;
  this.answers = [];
}

Student.prototype.addAnswer = function (qtn) {
  this.answers.push(qtn);
};

function Quiz(questionsArray, students) {
  this.questions = new Map();
  for (let qtn of questionsArray) {
    this.questions.set(qtn.qid, qtn.answer);
  }
  this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
  const student = this.students.find((s) => s.studentId === sid);
  if (!student) return 0;
  let score = 0;
  for (let ans of student.answers) {
    const correctAnswer = this.questions.get(ans.qid);
    if (ans.checkAnswer(correctAnswer)) score++;
  }
  return score;
};

Quiz.prototype.getAverageScore = function () {
  let totalScore = 0;
  for (let student of this.students) {
    totalScore += this.scoreStudentBySid(student.studentId);
  }
  return totalScore / this.students.length;
};

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];

const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];

const quiz = new Quiz(questions, students);

let score10 = quiz.scoreStudentBySid(10);
console.log(score10);

let score11 = quiz.scoreStudentBySid(11);
console.log(score11);

let average = quiz.getAverageScore();
console.log(average);
