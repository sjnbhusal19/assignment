const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3
let arrLength = arr.length
console.log(arrLength)



//Q2 reverse the array and console log
//expected output [2,5,3]
let arrReverse = arr.reverse()
console.log(arrReverse)

///Q3 join the array and console log
// expected output 352
let arrJoin =arr.join('')
console.log(arrJoin)

//Q4 Remove the last element from the array and log the modified array to the console
const arr = [3,5,2];
const newArray= arr.pop()
console.log(arr)

// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
//const num = [6,4,2,8,10,12]

const num = [6, 4, 2, 8, 10, 12]
let allEven = true;
num.forEach((element) => {
    if (element % 2 !== 0) {
        allEven = false
    }
})
if (allEven) {
    console.log("All even");
} else {
    console.log("Not all even");
}


// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3


//const allNum = [3, 5, 2, 8, 5];
//const searchElement = 2;

const allNum = [3, 5, 2, 8, 5];
const index = allNum.indexOf(2)
console.log(index)

//sum of all price using reduce()
//Expected outpur is 4200
const Array1 = [
    {id: 1, productName:'Hawkins Cooker', price:3200 },
    {id: 14, productName:'Tomato', price:500 },
      {id: 11, productName:'Potato', price:200 },
      {id: 15, productName:'Sunsilk', price: 300 },
  ]
  const totalPrice = Array1.reduce((summation,value)=>{
      return summation+value.price
  },0)
  console.log(totalPrice)