function getArrayDetails(items) {
    if (!Array.isArray(items)) {
        items = [items]; 
    }
    
    return {
        firstElement: items[0],
        lastElement: items[items.length - 1],
        length: items.length
    };
}

let userInput = prompt("Enter a letter or a number, or an array of letters/numbers (comma separated):");

if (userInput.trim()) {
    let itemsArray = userInput.split(',');

    if (itemsArray.length === 1) {
        itemsArray = itemsArray[0]; 
    }

    const result = getArrayDetails(itemsArray);

    console.log(result);
} else {
    console.log("No input provided");
}
console.log("Kloey's Output from Homework 4 - Excerse 6-2");