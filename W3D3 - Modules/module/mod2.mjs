// import mod from "./mod.mjs";

// mod();
let res = await fetch("https://dummyjson.com/recipes");
let json = await res.json();
async function loadModule() {
  const module = await import("./mod.mjs");
  module.default();
}
loadModule();
console.log(json);
