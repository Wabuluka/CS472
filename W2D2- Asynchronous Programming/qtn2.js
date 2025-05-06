const isPrime = (n) => {
  //   for (let i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;
  //   return n > 1;
  return new Promise((resolve, reject) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    resolve({ prime: n > 1 });
  });
};

(async () => {
  console.log("start");
  try {
    const result = await isPrime(7);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  console.log("end");
})();
