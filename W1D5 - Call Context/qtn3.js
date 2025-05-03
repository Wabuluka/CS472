"use strict";
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    const self = this;
    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });
  },
};

group.showList();
