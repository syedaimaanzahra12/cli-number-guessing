#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 5);
const answers = await inquirer.prompt([
    { name: "userGuessNumber", type: "number", message: "Please guess a number between 5-10 " },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congragulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
