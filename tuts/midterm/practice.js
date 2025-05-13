function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
// console.log(camelize("background-color"));

function filterRange(arr, a, b) {
  return arr.filter((x) => x >= a && x <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
