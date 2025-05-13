let studied = true;
let willPassTheExam = function () {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve("Pass");
    } else {
      reject(new Error("Fail"));
    }
  });
};

let askMe = function () {
  willPassTheExam()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};
// askMe();
// console.log("Finished");

async function askMe1() {
  try {
    let result = await willPassTheExam();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

askMe1();
console.log("Finish");
