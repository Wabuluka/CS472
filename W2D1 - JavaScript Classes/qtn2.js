class Student {
  #studentId;
  #answers;

  constructor(stdId) {
    this.#studentId = stdId;
    this.#answers = [];
  }

  getStudentId() {
    return this.#studentId;
  }

  getAnswers() {
    return this.#answers;
  }

  addAnswer(qtn) {
    this.#answers.push(qtn);
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(givenAns) {
    return this.answer === givenAns;
  }
}

class Quiz {
  constructor(questionsArray, students) {
    this.questions = new Map();
    for (let question of questionsArray) {
      this.questions.set(question.qid, question.answer);
    }
    this.students = students;
  }

  scoreStudentBySid(sid) {
    const student = this.students.find((s) => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (let ans of student.getAnswers()) {
      const correctAnswer = this.questions.get(ans.qid);
      if (ans.checkAnswer(correctAnswer)) {
        score++;
      }
    }
    return score;
  }

  getAverageScore() {
    let total = 0;
    for (let student of this.students) {
      total += this.scoreStudentBySid(student.studentId);
    }
    return total / this.students.length;
  }
}

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

console.log(quiz.scoreStudentBySid(10));
console.log(quiz.scoreStudentBySid(11));
console.log(quiz.getAverageScore());
