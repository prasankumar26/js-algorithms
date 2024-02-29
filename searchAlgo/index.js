// 1) linearSearch 
function linearSearch(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;   
        }
    }
    return -1;
}

// Example usage:
const arrayToSearch = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const result = linearSearch(arrayToSearch, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}.`); // 'Target 7 found at index 3.' 
} else {
  console.log(`Target ${targetValue} not found in the array.`);
}



// binarySearch 
function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;
 
    while(low <= high){
     const mid = Math.floor((low + high) / 2);
     if(arr[mid] === target){
         return mid;
     } else if(arr[mid] < target){
        low = mid + 1;
     } else {
        high = mid - 1;
     }
    }
 
    return -1;
 }
 
 // Example usage:
 const sortedArray = [1, 3, 5, 7, 9, 11, 13];
 const BtargetValue = 13;
 const Bresult = binarySearch(sortedArray, BtargetValue);
 if (Bresult !== -1) {
 console.log(`Target ${BtargetValue} found at index ${Bresult}.`);
 } else {
 console.log(`Target ${BtargetValue} not found in the array.`);
 }