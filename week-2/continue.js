//Ask the user if they want to continue
//If they do then wait 2 secs (2000ms)
//Then ask them again
//else close app

// things to use: readline, setTimeout,
const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkContinue() {
  app.question(`want to continue? 1. yes 2. no`, function (userAnswer) {
    if (userAnswer === "1") {
      setTimeout(function () {
        checkContinue();
      }, 2000);
    } else {
      app.close();
    }
  });
}
