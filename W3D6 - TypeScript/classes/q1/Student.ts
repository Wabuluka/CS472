class Student {
  private studentId: string;
  private answers: { studentId: string; answer: string }[];

  constructor(id: string) {
    this.studentId = id;
    this.answers = [];
  }

  addAnswer(answer: string): void {
    this.answers.push({ studentId: this.studentId, answer });
  }
}
