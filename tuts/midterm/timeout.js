let timerId = setInterval(() => console.log("Console.log in 1 sec"), 1000);
setTimeout(() => clearInterval(timerId), 10000);
