function countVowels(word) {
    const vowels = "aeiouyAEIOUY"; 
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('');

    return lowerWord === reversedWord;
}

let userInput = prompt("Enter a word:");

let vowelCount = countVowels(userInput);

let palindromeStatus = isPalindrome(userInput);

if (palindromeStatus) {
    console.log(`Your word contains ${vowelCount} vowels and is a palindrome.`);
} else {
    console.log(`Your word contains ${vowelCount} vowels and is not a palindrome.`);
}


console.log("Kloey's Output from Homework 4 - Excerse 8");