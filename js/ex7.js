let words = []; 

while (true) {
    let userInput = prompt("Enter a word (type 'stop' to end):");

    if (userInput.toLowerCase() === "stop") {
        if (words.length === 0) {
            console.log("You didn't enter any words before stopping.");
        } else {
            console.log("You entered the following:");
            words.forEach(word => console.log(word));
        }
        break; //exit the loop
    } else {
        words.push(userInput);
    }
}


console.log("Kloey's Output from Homework 4 - Excerse 7");