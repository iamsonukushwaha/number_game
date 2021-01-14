const op = require('./app');

const readline =  require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let fun = [,op.plus(num1, num2), op.minus(num1, num2),op.product(num1, num2), op.division(num1, num2)];
let operator = [,op.pl,op.mi,op.pr,op.di]

let choice = Math.floor((Math.random() * 4) + 1);
let f = fun[choice];
let o = operator[choice];
let answer = f;
// console.log(answer);
let count = 0;


module.exports.play = function () {

    rl.question(`What is ${ num1 } ${o} ${ num2 } ? \n`, (userInput) => {
        if(userInput.trim() == answer) {
            console.log("Correct");
            rl.close();
        }
        else {
            count++;
            rl.setPrompt('Incorrect response, Please try again! \n');
            rl.prompt();
            rl.on('line', (userInput) => {
                if(userInput.trim() == answer) {
                    console.log("Correct");
                    rl.close();
                }
                else if (count < 10){
                    count++;
                    rl.setPrompt(`Your answer of ${ userInput } is incorrect, Try again! \n`);
                    rl.prompt();
                    // console.log(count);
                }
                else {
                    console.log('\nYou lose !!! \n');
                    console.log(`The answer is ${ answer }  \n`);
                    rl.close();
                }
            });
        }
    });
    
    rl.on('close', () => {
        console.log('Thank You !\nPlay again');
    });
    
};
