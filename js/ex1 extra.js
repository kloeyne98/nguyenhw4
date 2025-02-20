function calculator(num1, num2, operator) {
    if (operator === "+") {
        return `${num1} + ${num2} = ${num1 + num2}`;
    } else if (operator === "-") {
        return `${num1} - ${num2} = ${num1 - num2}`;
    } else if (operator === "*") {
        return `${num1} * ${num2} = ${num1 * num2}`;
    } else if (operator === "/") {
        return `${num1} / ${num2} = ${num1 / num2}`;
    } else {
        return "Invalid operator!";
    }

  //  return `${num1} ${operator} ${num2} = ${result}`; 

}

let input1   = prompt("Please Enter First Number: ");
let input2   = prompt("Please Enter Second Number: ");
let operator = prompt("Please Enter a mathematical operation (+, -, *, /): ");

let num1     = Number(input1); 
let num2     = Number(input2); 
let output   = calculator(num1, num2, operator); 

console.log(output);
console.log("Kloey's Output from Homework 4 - Excerse 1");