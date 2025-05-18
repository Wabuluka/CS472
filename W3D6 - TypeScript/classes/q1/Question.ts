class Question {
  private qid: string;
  private answer: string;

  constructor(id: string, answer: string) {
    this.qid = id;
    this.answer = answer;
  }

  getQid(): string {
    return this.qid;
  }

  addAnswer(answer: string): void {}
}
