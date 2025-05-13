const user = {
  salute: "",
  greet: function () {
    let self = this;
    this.salute = "Hello";
    console.log(this.salute);

    const setFrench = function (newSalute) {
      self.salute = newSalute;
    };
    setFrench("Bonjour");
    console.log(this.salute);
  },
};
user.greet();
