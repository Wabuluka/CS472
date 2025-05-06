(async function () {
  const result = await (await fetch("https://dummyjson.com/recipes")).json();
  result.recipes.forEach((recipe) => {
    console.log(recipe);
  });
})();
