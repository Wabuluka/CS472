let str = "Greetings, ";
let user = {
  firstName: "John",
  lastname: "Smith",
  display: function () {
    console.log(str, this.firstName);
    show("hi");
  },
};
user.display();
function show(msg) {
  console.log(msg + " " + user.lastname);
}
show.call(user, "hello");
