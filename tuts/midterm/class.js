class User {
  #privateName;
  constructor(name) {
    this.#privateName = name;
  }

  get name() {
    console.log(this.#privateName);
  }
}

let user = new User("Davies");
user.name;
console.log(User.prototype);
console.log(user.__proto__);
