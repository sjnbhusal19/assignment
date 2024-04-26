const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
let maxNum=Math.max(...arr)
console.log(maxNum)


//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

//const elementToRemove = 2;
arr.splice(2, 1);
console.log(arr)

//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const mul=arr.map((value)=>{
    return(value*5)
  })
  console.log(mul)

//find intersection (common elements) of arr and arr2
//expected output: [5]
//const arr2 = [5,21,32]
arr2=[5,21,32]
const intersection = arr.filter((element) => {
 return arr2.includes(element)
  })
console.log(intersection)
