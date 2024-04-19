#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generat  a random number.
//2) user input for guessing number.
//3) compare the guessed number with computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 6+1); //generate a random number between 1-10
const answers = await inquirer.prompt([
    {
        name : "userGuessNumber",
        type : "number",
        message: "Please guess a number between 1-6",
    },
]);
if(answers.userGuessNumber === randomNumber){
    console.log("Congratulation! you guess right number.");
}else{
    console.log("you guessed number.");
}