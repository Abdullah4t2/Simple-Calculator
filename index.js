#! /usr/bin/env node
import inquirer from "inquirer";
// printing a Wellcome message
console.log("\n\tWellcome To \'codeWithAbdullah\'-CLI Simple Calculator\n");
// Asking question from user through inquirer
const answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);
//  conditional statements if-Else
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
