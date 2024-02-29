// 1) findMissingNumber 
function findMissingNumber(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr.indexOf(i) === -1) {
            return i;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let missingNumber = findMissingNumber(arr);
console.log("The missing number is:", missingNumber);


// 2) findMissingNumbers
function findMissingNumbers(arr, maxNumber) {
    const missingNumbers = [];
    for (let i = 1; i <= maxNumber; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 18];
let missingNumbers = findMissingNumbers(arr1, Math.max(...arr1));
console.log("The missing number is:", missingNumbers);


// 3) findDuplicate 
const findDuplicate = (arr) => {
    const seenNumbers = new Set();

    for (let char of arr) {
        if (seenNumbers.has(char)) {
            return char; // Duplicate Found
        } else {
            seenNumbers.add(char)
        }
    }

    return null; // No Duplicates Found
}
const arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
let duplicateNumber = findDuplicate(arr3);

if (duplicateNumber !== null) {
    console.log("The duplicate number is:", duplicateNumber);
} else {
    console.log("No duplicate number found.");
}


// 4) findLargestAndSmallest
function findLargestAndSmallest(arr) {
    if (arr.length === 0) {
        return null;
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return {
        largest, smallest
    }
}
const arr4 = [1, 2, 3, 4, 100];
const result = findLargestAndSmallest(arr4)
if (result !== null) {
    console.log(result);
} else {
    console.log("Array is empty.");
}


// 5) cumulativeSum
function cumulativeSum(arr) {
    let result = [];
    let sum = 0;
    for (let num of arr) {
        sum += num;
        result.push(sum);
    }
    return result;
}
const arr5 = [1, 2, 3, 4, 5];
let cumulativeSumArray = cumulativeSum(arr5);
console.log("Cumulative sum array:", cumulativeSumArray);


// 6) findDuplicates 
const findDuplicates = (arr) => {
    const seemNumbers = new Set();
    const duplicates = [];

    for (let num of arr) {
        if (seemNumbers.has(num)) {
            duplicates.push(num)
        } else {
            seemNumbers.add(num)
        }
    }
    return duplicates;
}
const arr6 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
let duplicateNumbers = findDuplicates(arr6);

if (duplicateNumbers.length > 0) {
    console.log("The duplicate numbers are:", duplicateNumbers);
} else {
    console.log("No duplicate numbers found.");
}


// 7) removeDuplicates
const removeDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
};


const removeDuplicatess = (arr) => {
    return [...new Set(arr)]
};
const arr7 = [1, 1, 1, 1, 1, 1, 1];
let resultRD = removeDuplicates(arr7);
console.log("Array without duplicates:", resultRD);


// 8) findPairsWithSum
function findPairsWithSum(arr, targetSum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]])
            }
        }
    }
    return pairs;
}

let arr8 = [1, 5, 6, 1, 0, 1];
let targetSum = 6;

let resultFP = findPairsWithSum(arr8, targetSum);
console.log("Pairs with sum", targetSum, "are:", resultFP); // 'Pairs with sum 6 are: [ [ 1, 5 ], [ 5, 1 ], [ 5, 1 ], [ 6, 0 ] ]' 


// 9) sumOfArray
const sumOfArray = (arr) =>{
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
const values = [1,2,3,4,5]; 
const sumValues = sumOfArray(values)
console.log(sumValues);


// 10) removeDuplicatesAndCountOccurrences
function removeDuplicatesAndCountOccurrences(arr) {
    let occurrences = {};
    let resultRDX = [];

    arr.forEach((num) => {
         if(occurrences[num]){
            occurrences[num]++
         } else {
            occurrences[num] = 1;
            resultRDX.push(num)
         }
    })

    return {
        occurrences, resultRDX
    }
}

let arr9 = [1, 2, 3, 4, 1, 2, 4, 5, 3, 3];
let { resultRDX, occurrences } = removeDuplicatesAndCountOccurrences(arr9);
console.log("Array without duplicates:", resultRDX); // 'Array without duplicates: [ 1, 2, 3, 4, 5 ]' 
console.log("Occurrences:", occurrences);  // 'Occurrences: { 1: 2, 2: 2, 3: 3, 4: 2, 5: 1 }' 


// 11) findIntersection 
function findIntersection(arr1, arr2){
    return arr1.filter(element => arr2.includes(element))
  }
let arr2_1 = [1, 2, 3, 4, 5];
let arr2_2 = [3, 4, 5, 6, 7];
let intersection = findIntersection(arr2_1, arr2_2);
console.log("Intersection of the two arrays:", intersection);  // [3, 4, 5]


// 12) areArraysEqual
function areArraysEqual(arr1, arr2) {
   if(arr1.length !== arr2.length){
    return false;
   }
   for(let i=0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
        return false;
    }
   }
   return true;
}

let arr3_1 = [1, 2, 3, 4, 5];
let arr3_2 = [1, 2, 3, 4, 5];
let resultAE = areArraysEqual(arr3_1, arr3_2);
if (resultAE) {
  console.log("The two arrays are equal.");
} else {
  console.log("The two arrays are not equal.");
}


// 13) moveZerosToEnd
function moveZerosToEnd(arr){
    let nonZeroIndex = 0;

     for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++
        }
     }

     for(let i=nonZeroIndex; i<arr.length; i++){
        arr[i] = 0
     }
   
    return arr;
}

let arr10 = [0, 2, 0, 3, 4, 0, 5, 0];
let resultMZE = moveZerosToEnd(arr10);
console.log(resultMZE);


// 14) maxProduct
function maxProduct(arr){
    if(arr.length < 2){
        return "Array should have at least two elements.";
    }
    arr.sort((a,b)=>a-b)
    let n = arr.length;
    
    let maxProductWithPositives = arr[n-1] * arr[n-2];
    let maxProductWithNegatives = arr[0] * arr[1];

    return Math.max(maxProductWithPositives, maxProductWithNegatives);
}

let arr11 = [2, 3, -1, 5, -2, 4];
let resultMP = maxProduct(arr11);
console.log("Maximum product of two integers:", resultMP);


// 15) findFirstNonRepeating
function findFirstNonRepeating(arr){
    let countMap = {};
    for(let num of arr){
     countMap[num] = (countMap[num] || 0) + 1;
    }
    for(let num of arr){
     if(countMap[num] === 1){
         return num;
     }
    }
 }
 let arr12 = [3, 5, 4, 3, 2, 5, 4, 1];
 let resultFNR = findFirstNonRepeating(arr12);
 console.log("First non-repeating element:", resultFNR);



// 16) partitionOddEven
function partitionOddEven(arr){
    let result = {
     odd: [],
     even: [],
    }   
    for(let num of arr){
     if(num % 2 !== 0){
         result.odd.push(num)
     } else{
         result.even.push(num)
     }
    }
    return result
}
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let partitionedArray = partitionOddEven(arr13);
console.log("Partitioned array:", partitionedArray);



// 17) flattenArray 
const flattenArray = (array) =>{
    return array.reduce((acc, curr) =>{
       if(Array.isArray(curr)){
           acc = acc.concat(flattenArray(curr))
       } else{
           acc.push(curr)
       }
       return acc;
    }, [])
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const completelyFlattenedArray = flattenArray(nestedArray);
console.log(completelyFlattenedArray);


// 18) twoSum
const twoSum = (nums, target) =>{ 
    const numMap = {};
    for(let i=0; i< nums.length; i++){
      const compliment = target - nums[i];
      if(numMap.hasOwnProperty(compliment)){
           return [numMap[compliment], i];
      }
      numMap[nums[i]] = i;
    }
    return null;
  }

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const resultTS = twoSum(nums, target);
console.log(resultTS);


// 19) fibonacci 
const fibonacci = (n) =>{
    const series = [0, 1];
    for(let i=2; i< n; i++){
     const nextNumber = series[i - 1] + series[i - 2];
     series.push(nextNumber);
    }``
    return series;
  }
// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = fibonacci(numberOfTerms);
console.log(fibonacciSequence);


// 20) groupAnagrams 
const groupAnagrams = (words) =>{
    const anagramGroups = {};
    for(const word of words){
       const sortedWord = word.split('').sort().join('');
       if(anagramGroups.hasOwnProperty(sortedWord)){
           anagramGroups[sortedWord].push(word);
       } else {
           anagramGroups[sortedWord] = [word];
       }
    }
    const result = Object.values(anagramGroups);
    return result;
}
const wordsArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramGroups = groupAnagrams(wordsArray);
console.log(anagramGroups);