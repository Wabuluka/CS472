// console.log("start");
// async function f() {
//   return 1;
// }
// f().then(console.log);
// console.log("end");
console.log("start");
async function foo() {
  return " done ! ";
}
async function bar() {
  console.log(" insidebar - start");
  let result = await foo();
  console.log(result);
  console.log("insidebar - end");
}
bar();
console.log("end");
