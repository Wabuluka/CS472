class Employee {
  #fullname;
  #salary;

  constructor(name, salary) {
    this.#fullname = name;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
  setSalary(salary) {
    this.#salary = salary;
  }
}

class Manager extends Employee {
  #bonus;
  constructor(n, s, b) {
    super(n, s);
    this.#bonus = b;
  }

  getSalary() {
    return super.getSalary() + this.#bonus;
  }
}
