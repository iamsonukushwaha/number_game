const op = require('./app');
// console.log(op);
const readline =  require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let fun = [,op.plus(num1, num2), op.minus(num1, num2),op.product(num1, num2), op.division(num1, num2)];
let operator = [,op.pl,op.mi,op.pr,op.di]
// console.log(fun);
// for(i=0;i<50;i++){
//     console.log(fun[Math.floor((Math.random() * 4) + 1)]);
// }
let choice = Math.floor((Math.random() * 4) + 1);
let f = fun[choice];
let o = operator[choice];
let answer = f;
// console.log(answer);
// console.log(o);

rl.question(`What is ${ num1 } ${o} ${ num2 } ? \n`, (userInput) => {
    if(userInput.trim() == answer) {
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect response, Please try again! \n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer) {
                rl.close();
            }
            else {
                rl.setPrompt(`Your answer of ${ userInput } is incorrect, Try again! \n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log('Correct !!! \n');
});


