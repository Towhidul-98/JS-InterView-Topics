// In the previous Process
// function square(numArray){
//     let squareNumArray = [];
//     for (let i= 0; i< numArray.length ;i++){
//         squareNumArray.push( numArray[i] * numArray[i])
//     }
//     return squareNumArray;
// }
const number = [2,4,3,1,6,1,3,4]
// const result = square(number);
// console.log(result);

// const result1 = number.map(function(rafi,ruba){
//     console.log("Index" , ruba , "Value" ,rafi);
//     console.log(number)
// })
const square = x=>x>2;
let result1 = number.map(square)
console.log(result1)

result1 = number.find(square)
console.log(result1)

// const result1 = number.filter(x=>x>2)
// console.log(result1)


// const result1 = number.map(function(element){
//     return element*element
// })
// console.log(result1)

// const num1 = x => x>3;
// const result2 = number.fill(num1)
// console.log(result2)

// const num2 = x => x>3;
// const result3 = number.map(num2)
// console.log(result3)