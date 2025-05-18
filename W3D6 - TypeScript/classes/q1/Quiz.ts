class Quiz {
  constructor(
    private questions: { qid: string; answer: string }[],
    private students: {
      studentId: string;
      answers: { studentId: string; answer: string }[];
    }[]
  ) {}

  scoreStudent(studentId: string): number {
    const student = this.students.find((s) => s.studentId === studentId);
    if (!student) {
      throw new Error("Student not found");
    }

    let score = 0;
    for (const answer of student.answers) {
      const question = this.questions.find((q) => q.qid === answer.answer);
      if (question && question.answer === answer.answer) {
        score++;
      }
    }
    return score;
  }

  getAverageScore(): number {
    if (this.students.length === 0) {
      return 0;
    }

    let totalScore = 0;
    for (const student of this.students) {
      totalScore += this.scoreStudent(student.studentId);
    }
    return totalScore / this.students.length;
  }
}
