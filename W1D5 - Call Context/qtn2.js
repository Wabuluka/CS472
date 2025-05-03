function askPassword(ok, fail) {
  let password = prompt("password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword.bind(user)();
