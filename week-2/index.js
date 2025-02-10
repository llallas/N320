//pre built
const readline = require("readline");

//Installed dependencies

// custom modules
const { calcTriArea } = require("./functions");

console.log(calcTriArea({ base: 3, height: 7 }));

console.log(calcTriArea({ base: 2 }));

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.question(`Enter the height of the triangle: height: (1)`, function(answer) {
    function(userHeight = "1"){
        app.question(`Enter the base of the triangle: base: (1)`,
        function(userBase = "1"){
            const userAns = calcTriArea({ base: userBase, height: userHeight });
            console.log(`user Ans: ${userAns}`);
            app.close();
        });
    }
});
