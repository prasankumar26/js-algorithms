// 1) Reverse Words in a Sentence 
const ReverseWords = (str) =>{
     return str.split(' ').reverse().join(' ')
}
let sentence4 = "Hello World";  
const result = ReverseWords(sentence4)  
console.log(result); // 'World Hello'


// 2) reverseWordsInSentenceMethod2
const reverseWordsInSentenceMethod2 = (str) =>{
    return str.split(' ').map((item) => {
      return item.split('').reverse().join('')
    }).join(' ')
}
// Example usage:
var originalSentence = "Hello World";
var reversedSentence = reverseWordsInSentenceMethod2(originalSentence);
console.log(reversedSentence); // 'olleH dlroW'


// 3) areAnagramsMethod1 
const areAnagramsMethod1 = (str1, str2) =>{
    const sentence1 = str1.split('').sort().join('')
    const sentence2 = str2.split('').sort().join('')
    return sentence1 === sentence2;
}
// Example usage:
const word1 = "listen";
const word2 = "silent";
console.log(areAnagramsMethod1(word1, word2)); 


// 4) Check palindrome 
function palindrome(string){
    let reversedString = string.split('').reverse().join('')
    return string === reversedString;
} 
console.log(palindrome('racecar'));


// 5) capitalizeWordsFirstLetter 
const capitalizeWordsFirstLetter = (string) =>{
    return string.split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
// Example usage:
const originalString = "capitalize the first letter of each word";
const capitalizedString = capitalizeWordsFirstLetter(originalString);
console.log(capitalizedString); // 'Capitalize The First Letter Of Each Word' 


// 6) Anagrams 
function areAnagrams(str1, str2) {
    function cleanString(s) {
      return s.toLowerCase().replace(/\s/g, '');
    }

    const getCharFreequency = (data) =>{
        let charCount = {};
        for(let char of data){
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    }

    const cleanStr1 = cleanString(str1);
    const cleanStr2 = cleanString(str2);

    const freeq1 = getCharFreequency(cleanStr1);
    const freeq2 = getCharFreequency(cleanStr2);

    for(let char in freeq1){
        if(freeq1[char] !== freeq2[char]){
            return false;
        }
    }
    
    for(let char in freeq2){
        if(freeq2[char] !== freeq1[char]){
            return false;
        }
    }

    return true;
  }
  // Example usage:
  const string1 = "Listen";
  const string2 = "Silent";
  console.log(areAnagrams(string1, string2));  // Output: true  


// 7. Count Vowels 
function countVowels(input){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of input){
        if(vowels.includes(char)){
           count++
        }
    }
    return count;
}
// Example usage:
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`);


// 8) Find Longest Word
const findLongestWord = (sentence) =>{
   const splitWord = sentence.split(' ');
   let longWord = "";
   for(let char of splitWord){
      if(char.length >= longWord.length){
        longWord = char;
      }
   }
    return longWord;
}
// Example usage:
const inputSentence = "This is an example sentence with some long words.";
const longestWord = findLongestWord(inputSentence);
console.log(`Longest word: ${longestWord}`); 


// 9) removeDuplicates
const removeDuplicates = (inputString) =>{
    let grindChars = "";
    for(let char of inputString){
        if(!grindChars.includes(char)){
            grindChars += char;
        }
    }
    return grindChars;
}
// Example usage:
const originalStrings = "programming";
const stringWithoutDuplicates = removeDuplicates(originalStrings);
console.log(stringWithoutDuplicates);
// Output: "progamin"


// 10) firstNonRepeatingChar 
const firstNonRepeatingChar = (inputString) =>{
    const charCount = {};

    for(let char of inputString){
        charCount[char] = (charCount[char] || 0)  + 1;
    }

    for(let char of inputString){       
        if(charCount[char] === 1){
            return char;
        }
    }
}
// Example usage:
const inputStrings = "programming";
const firstNonRepeatingCharacter = firstNonRepeatingChar(inputStrings);
console.log(firstNonRepeatingCharacter);
// Output: "p"


// 11) Make First Letter Capital
let sentence = "prasan";
console.log(sentence[0].toUpperCase() + sentence.slice(1));