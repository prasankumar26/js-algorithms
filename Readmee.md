<!-- Strings -->
1) Reverse Words in a Sentence:- 

const ReverseWords = (str) =>{
    return ''
}

let sentence4 = "Hello World";  
const result = ReverseWords(sentence4)  
console.log(result); // 'World Hello'


2) reverseWordsInSentenceMethod2

const reverseWordsInSentenceMethod2 = (str) =>{
    return ""
}

// Example usage:
var originalSentence = "Hello World";
var reversedSentence = reverseWordsInSentenceMethod2(originalSentence);
console.log(reversedSentence); // 'olleH dlroW'


3) areAnagramsMethod1 (anagrams)

const areAnagramsMethod1 = (str1, str2) =>{
    return ""
}

// Example usage:
const word1 = "listen";
const word2 = "silent";
console.log(areAnagramsMethod1(word1, word2));  // true


4) Check palindrome:-

function palindrome(string){
    return ''
} 

console.log(palindrome('racecar')); // true


5) capitalizeWordsFirstLetter:-

const capitalizeWordsFirstLetter = (string) =>{
    return ''
}

// Example usage:
const originalString = "capitalize the first letter of each word";
const capitalizedString = capitalizeWordsFirstLetter(originalString);
console.log(capitalizedString); // 'Capitalize The First Letter Of Each Word' 


6) Anagrams:-

function areAnagrams(str1, str2) {
  return ''
}

// Example usage:
const string1 = "Listen";
const string2 = "Silent";
console.log(areAnagrams(string1, string2));  // Output: true


7) Count Vowels:-

function countVowels(input){
    return ''
}

// Example usage:
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`); // 'Number of vowels: 3' 


8) Find Longest Word:-

const findLongestWord = (sentence) =>{
   return ''
}

// Example usage:
const inputSentence = "This is an example sentence with some long words.";
const longestWord = findLongestWord(inputSentence);
console.log(`Longest word: ${longestWord}`); // 'Longest word: sentence' 


9) removeDuplicates:-

const removeDuplicates = (inputString) =>{
    return '';
}

// Example usage:
const originalStrings = "programming";
const stringWithoutDuplicates = removeDuplicates(originalStrings);
console.log(stringWithoutDuplicates); // progamin
// Output: "progamin"


10) firstNonRepeatingChar:-

const firstNonRepeatingChar = (inputString) =>{
   return ''
}

// Example usage:
const inputStrings = "programming";
const firstNonRepeatingCharacter = firstNonRepeatingChar(inputStrings);
console.log(firstNonRepeatingCharacter); // 'p' 


// 11) Make First Letter Capital

function makeCapital(sentence){
   return ''
}

let sentence = "prasan";
const result = makeCapital(sentence)
console.log(result); // 'Prasan'


<!-- Arrays -->
1) findMissingNumber:-

function findMissingNumber(arr) {
    return "";
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let missingNumber = findMissingNumber(arr);
console.log("The missing number is:", missingNumber); // 'The missing number is: 9' 


2) findMissingNumbers:-

function findMissingNumbers(arr, maxNumber) {
    return ""
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 18];
let missingNumbers = findMissingNumbers(arr1, Math.max(...arr1));
console.log("The missing number is:", missingNumbers); // 'The missing number is: [ 9, 11, 13, 15, 16, 17 ]' 



3) findDuplicate :-

const findDuplicate = (arr) => {
   return ""
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
let duplicateNumber = findDuplicate(arr3); // 'The duplicate number is: 7' 

if (duplicateNumber !== null) {
    console.log("The duplicate number is:", duplicateNumber);
} else {
    console.log("No duplicate number found.");
}


4) findLargestAndSmallest:-

function findLargestAndSmallest(arr) {
   return "";
}

const arr4 = [1, 2, 3, 4, 100];
const result = findLargestAndSmallest(arr4) // { largest: 100, smallest: 1 }

if (result !== null) {
    console.log(result);
} else {
    console.log("Array is empty.");
}


5) cumulativeSum:-

function cumulativeSum(arr) {
    return "";
}

const arr5 = [1, 2, 3, 4, 5];
let cumulativeSumArray = cumulativeSum(arr5);
console.log("Cumulative sum array:", cumulativeSumArray); // 'Cumulative sum array: [ 1, 3, 6, 10, 15 ]' 


6) findDuplicates:-

const findDuplicates = (arr) => {
    return "";
}

const arr6 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
let duplicateNumbers = findDuplicates(arr6); // 'The duplicate numbers are: [ 1, 6, 6, 7, 7, 7, 10 ]' 

if (duplicateNumbers.length > 0) {
    console.log("The duplicate numbers are:", duplicateNumbers);
} else {
    console.log("No duplicate numbers found.");
}


// 7) removeDuplicates:-

const removeDuplicates = (arr) => {
   return "";
};

const arr7 = [1, 1, 1, 1, 1, 1, 1];
let resultRD = removeDuplicates(arr7);
console.log("Array without duplicates:", resultRD); // 'Array without duplicates: [ 1 ]' 


// 8) findPairsWithSum:-

function findPairsWithSum(arr, targetSum) {
    return "";
}

let arr8 = [1, 5, 6, 1, 0, 1];
let targetSum = 6;

let resultFP = findPairsWithSum(arr8, targetSum);
console.log("Pairs with sum", targetSum, "are:", resultFP); // 'Pairs with sum 6 are: [ [ 1, 5 ], [ 5, 1 ], [ 5, 1 ], [ 6, 0 ] ]' 


// 9) sumOfArray:-

const sumOfArray = (arr) =>{
    return ""; 
}

const values = [1,2,3,4,5]; 
const sumValues = sumOfArray(values)
console.log(sumValues); // 15


// 10) removeDuplicatesAndCountOccurrences:-

function removeDuplicatesAndCountOccurrences(arr) {
    return "";
}

let arr9 = [1, 2, 3, 4, 1, 2, 4, 5, 3, 3];
let { resultRDX, occurrences } = removeDuplicatesAndCountOccurrences(arr9);
console.log("Array without duplicates:", resultRDX); // 'Array without duplicates: [ 1, 2, 3, 4, 5 ]' 
console.log("Occurrences:", occurrences); // 'Occurrences: { 1: 2, 2: 2, 3: 3, 4: 2, 5: 1 }' 


// 11) findIntersection:-

function findIntersection(arr1, arr2){
    return " ";
}

let arr2_1 = [1, 2, 3, 4, 5];
let arr2_2 = [3, 4, 5, 6, 7];
let intersection = findIntersection(arr2_1, arr2_2);
console.log("Intersection of the two arrays:", intersection); // 'Intersection of the two arrays: [ 3, 4, 5 ]' 


// 12) areArraysEqual

function areArraysEqual(arr1, arr2) {
   return "";
 }
 
 let arr3_1 = [1, 2, 3, 4, 5];
 let arr3_2 = [1, 2, 3, 4, 5];
 let resultAE = areArraysEqual(arr3_1, arr3_2);
 if (resultAE) {
   console.log("The two arrays are equal."); // 'The two arrays are equal.'
 } else {
   console.log("The two arrays are not equal.");
 }
 


// 13) moveZerosToEnd:-

function moveZerosToEnd(arr){
    return "";
}

let arr10 = [0, 2, 0, 3, 4, 0, 5, 0];
let resultMZE = moveZerosToEnd(arr10);
console.log(resultMZE); // [ 2, 3, 4, 5, 0, 0, 0, 0 ]


// 14) maxProduct:-

function maxProduct(arr){
   return "";
}

let arr11 = [2, 3, -1, 5, -2, 4];
let resultMP = maxProduct(arr11);
console.log("Maximum product of two integers:", resultMP);


// 15) findFirstNonRepeating:-

function findFirstNonRepeating(arr){
   return "";
}

let arr12 = [3, 5, 4, 3, 2, 5, 4, 1];
let resultFNR = findFirstNonRepeating(arr12);
console.log("First non-repeating element:", resultFNR); // 'First non-repeating element: 2' 


// 16) partitionOddEven:-

function partitionOddEven(arr){
    return "";
}

let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let partitionedArray = partitionOddEven(arr13);
console.log("Partitioned array:", partitionedArray); // 'Partitioned array: { odd: [ 1, 3, 5, 7, 9 ], even: [ 2, 4, 6, 8 ] }' 


// 17) flattenArray:-

const flattenArray = (array) =>{
    return "";
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const completelyFlattenedArray = flattenArray(nestedArray);
console.log(completelyFlattenedArray); // [ 1, 2, 3, 4, 5, 6 ]


// 18) twoSum:-

const twoSum = (nums, target) =>{
    return "";
}
  
// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const resultTS = twoSum(nums, target);
console.log(resultTS); // [ 0, 1 ] 


// 19) fibonacci:-

const fibonacci = (n) =>{
    return "";
 }

 // Example usage:
 const numberOfTerms = 10;
 const fibonacciSequence = fibonacci(numberOfTerms);
 console.log(fibonacciSequence); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]


// 20) groupAnagrams:-

const groupAnagrams = (words) =>{
    return "";
}

const wordsArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramGroups = groupAnagrams(wordsArray);
console.log(anagramGroups); // const wordsArray = ["eat", "tea", "tan", "ate", "nat", "bat"];


<!-- Objects -->
1) flattenObject:-

const flattenObject = (obj, prefix = '') =>{
    return null;
}

// Example usage
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  },
  h: 5
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject); // { a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f.g': 4, h: 5 }


2) sumObjectValues:-

const sumObjectValues = (obj) =>{
    return null;
}

// Example usage
const nestedObjects = {
   a: 1,
   b: {
     c: 2,
     d: {
       e: 3,
       f: {
         g: 4
       }
     }
   },
   h: 5
 };
 
 const sumObject = sumObjectValues(nestedObjects);
 console.log(sumObject); 


3) FindKeyByValue:- 

const findKeyByValue = (obj, value) =>{
    return null;
}

const sampleObject2 = { a: 2, b: 3, c: 5 }; 
console.log(findKeyByValue(sampleObject2, 3));


4) mergeObjects:- 
const mergeObjects = (obj1, obj2) =>{
    return ""   
}

const sampleObject5a = { a: 2, b: 3 };
const sampleObject5b = { b: 5, c: 7 };
console.log(mergeObjects(sampleObject5a, sampleObject5b));


5) groupByProperty:-

const groupByProperty = (arr, property) =>{
   return '';
}

const arrayOfObjects = [
    { id: 1, category: 'A', value: 10 },
    { id: 2, category: 'B', value: 20 },
    { id: 3, category: 'A', value: 30 },
    { id: 4, category: 'B', value: 40 },
    { id: 5, category: 'A', value: 50 }
  ];
const groupedByCategory = groupByProperty(arrayOfObjects, 'category');
console.log(groupedByCategory);
output:-
{ 
    A: 
    [ { id: 1, category: 'A', value: 10 },
      { id: 3, category: 'A', value: 30 },
      { id: 5, category: 'A', value: 50 } ],
   B: 
    [ { id: 2, category: 'B', value: 20 },
      { id: 4, category: 'B', value: 40 } ]
}


6) transformObjectKeys:-

const transformObjectKeys = (obj, transform) =>{
    result = "";
}

const sampleObject = { firstName: 'John', lastName: 'Doe', age: 25 };
const transformedObject = transformObjectKeys(sampleObject, key=>key.toUpperCase())
console.log(transformedObject);  // { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 25 }


7) transformObjectValues:-

const transformObjectValues = (obj, transform) =>{
    return '';
}

const sampleObjects = { a: 2, b: 3, c: 5 };
const transformedObjects = transformObjectValues(sampleObjects, value=>value ** 2)
console.log(transformedObjects); // { a: 4, b: 9, c: 25 }