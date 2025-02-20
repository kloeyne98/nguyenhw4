function getArrayDetails(numbers) {
    if (!Array.isArray(numbers)) {
        numbers = [numbers]; 
    }
    
    return {
        firstElement: numbers[0],
        lastElement: numbers[numbers.length - 1],
        length: numbers.length
    };
}

let userInput = prompt("Please input an array of numbers (comma separated):");

if (userInput.trim()) {
    let numbersArray = userInput.split(',').map(Number);

    if (numbersArray.length === 1 && !isNaN(numbersArray[0])) {
        numbersArray = numbersArray[0]; 
    }

    const result = getArrayDetails(numbersArray);

    console.log(result);
} else {
    console.log("No input provided");
}
console.log("Kloey's Output from Homework 4 - Excerse 6");