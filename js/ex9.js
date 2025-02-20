function guessNumber() {
    const correctNumber = 86;
    let attempts = 0;
    let promptMessage = "Guess a number between 1 and 100:";
    
    while (true) {
        let guess = parseInt(prompt(promptMessage));
        attempts++;
        
        if (guess < correctNumber) {
            promptMessage = "Number is too low, please guess again:";
        } else if (guess > correctNumber) {
            promptMessage = "Number is too high, please guess again:";
        } else {
            alert(`Correct Number!!! It took you ${attempts} attempts to guess the correct number.`);
            break;
        }
    }
}

guessNumber();
