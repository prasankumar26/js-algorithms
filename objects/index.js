// 1) flattenObject 
const flattenObject = (obj, prefix = '') =>{
    let flatObject = {};

    for(let key in obj){
      if(obj.hasOwnProperty(key)){
          const newKey = prefix ? `${prefix}.${key}` : key;
          
          if(typeof obj[key] === 'object' && obj[key] !== null){
              const nestedFlatObject = flattenObject(obj[key], newKey);
              flatObject = {...flatObject, ...nestedFlatObject};
          } else {
              flatObject[newKey] = obj[key];
          }
      }
    }
    return flatObject;
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
console.log(flattenedObject); 


// 2) sumObjectValues 
const sumObjectValues = (obj) =>{
    let total = 0;
    for(const key in obj){
       if(obj.hasOwnProperty(key)){
           if(typeof obj[key] === 'number'){
               total += obj[key];
           } else if(typeof obj[key] === 'object' && obj[key] !== null){
               total += sumObjectValues(obj[key])
           }
       }
    }
    return total;
}

// Example usage
const nestedObjects = {
   a: 1,
   b: {
     c: 2,
     d: {
       e: 3,
       f: {
         g: 4,
       }
     }
   },
   h: 5,
 };
 
 const sumObject = sumObjectValues(nestedObjects);
 console.log(sumObject); 



// 3) FindKeyByValue 
const findKeyByValue = (obj, value) =>{
    for(const key in obj){
        if(obj.hasOwnProperty(key) && obj[key] === value){
            return key;
        }
    }
    return null;
}
const sampleObject2 = { a: 2, b: 3, c: 5 }; 
console.log(findKeyByValue(sampleObject2, 3));



// 4) mergeObjects 
const mergeObjects = (obj1, obj2) =>{
    return {...obj1, ...obj2}    
}
const sampleObject5a = { a: 2, b: 3 };
const sampleObject5b = { b: 5, c: 7 };
console.log(mergeObjects(sampleObject5a, sampleObject5b));


// 5) groupByProperty
const groupByProperty = (arr, property) =>{
    return arr.reduce((acc, curr) =>{
      const value = curr[property];
        if(!acc[value]){
            acc[value] = [];
        }
            acc[value].push(curr)
        return acc;
    }, {})
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


// 6) transformObjectKeys 
const transformObjectKeys = (obj, transform) =>{
    const result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const newKey = transform(key)
            result[newKey] = obj[key]
        }
    }
    return result;
}
const sampleObject = { firstName: 'John', lastName: 'Doe', age: 25 };
const transformedObject = transformObjectKeys(sampleObject, key=>key.toUpperCase())
console.log(transformedObject);


// 7) transformObjectValues
const transformObjectValues = (obj, transform) =>{
    const result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const newKey = transform(obj[key])
            result[key] = newKey;
        }
    }
    return result;
}
const sampleObjects = { a: 2, b: 3, c: 5 };
const transformedObjects = transformObjectValues(sampleObjects, value=>value ** 2)
console.log(transformedObjects); // { a: 4, b: 9, c: 25 }