let num1 ;   // Way 1 to get undefined

function add(num1 ,num2){    // Way 2 to get undefined
    console.log(num1+num2);
}
let result1 = add(3,4)
console.log(result1)

function add1(num1 ,num2){    // Way 3 to get undefined
    console.log(num1+num2);
    return
}
let result2 = add1(3,4)
console.log(result2)



function add2(num1 ,num2){    // Way 4 to get undefined
    console.log(num1,num2);  
}
console.log(add2(12))

const student = {     // Way 5 to get undefined
    studentId : 32 ,
    studentName : 'RAFI'
}
console.log(student.address)
 
let fun = undefined;  // Way 6 to get undefined
console.log(fun)

