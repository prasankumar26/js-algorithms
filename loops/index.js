// 1) reverseWords 
function reverseWords(str) {
    const wordSplit = str.split(' ');
    let reversedArray = [];

    for(let i = wordSplit.length - 1; i>=0; i--){
       reversedArray.push(wordSplit[i])
    }

    return reversedArray.join(' ')
}

// Example usage:
var originalString = "Hello World";
var reversedString = reverseWords(originalString);
console.log(reversedString);  // Output: "World Hello"
 

//  2) reverseWordsInSentence 
function reverseWordsInSentence(str) {
   const wordSplit = str.split('');
   const reversedWordsSentencs = [];

   for(let i = wordSplit.length - 1; i >= 0; i--){
       reversedWordsSentencs.push(wordSplit[i])
   }

   return reversedWordsSentencs.join('')
}

// Example usage:
var originalString = "Hello World";
var reversedString = reverseWordsInSentence(originalString);
console.log(reversedString);  // 'dlroW olleH'


// 3) for of string reverse 
function reverseWordInSentence(string) {
   let reversed = ''
   for(let char of string){
    reversed = char + reversed
   }
   return reversed
}

var originalString = "Hello World";
var reversedString = reverseWordInSentence(originalString);
console.log(reversedString); 


// 4) capitalizeWordsFirstLetter 
const capitalizeWordsFirstLetter = (string) =>{
    const words = [];
    for(let char of string.split(' ')){
        words.push(char[0].toUpperCase() + char.slice(1))
    }
    return words;
}

// Example usage:
const originalString = "capitalize the first letter of each word";
const capitalizedString = capitalizeWordsFirstLetter(originalString);

console.log(capitalizedString); // 'Capitalize The First Letter Of Each Word' 