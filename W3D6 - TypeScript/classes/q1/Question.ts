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
  checkAnswer(answer: string): boolean {
    return this.answer === answer;
  }
}
