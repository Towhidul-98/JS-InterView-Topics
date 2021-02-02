const student =[
    {id : 01 , name : "rafi"},
    {id : 02 , name : "ruba"},
    {id : 03 , name : "rini"},
    {id : 04 , name : "mahbub"}
]
const Name = [];
for (let i = 0 ; i< student.length ; i++){
    Name.push(student[i].name)
}
console.log(Name)
// Using previous methods

const Name2 = student.map( x => x.name);
console.log(Name2)
// using ES6 Method

const Id = student.filter( x =>  x.id>2);
console.log(Id)