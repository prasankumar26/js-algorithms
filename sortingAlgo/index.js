// 1) quickSort 
function quickSort(arr){
    if(arr.length <= 1){
     return arr;
    }
 
    const pivot = arr[0];
    let left = [];
    let right = [];
 
    for(let i=1; i< arr.length; i++){
     if(arr[i] < pivot){
         left.push(arr[i])
     } else {
         right.push(arr[i])
     }
    }
 
    return quickSort(left).concat(pivot, quickSort(right))
 }
 
 // Example usage:
 const unsortedArray = [64, 25, 12, 22, 11];
 console.log("Unsorted Array:", unsortedArray);
 const sortedArray = quickSort(unsortedArray);
 console.log("Sorted Array:", sortedArray);



// 2) mergeSort 
 const mergeSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }

    let pivot = Math.floor(arr.length / 2);
    let left = arr.slice(0, pivot);
    let right = arr.slice(pivot);

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) =>{
      let result = [];

      while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
      }

      return [...result, ...left, ...right]
}

console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));