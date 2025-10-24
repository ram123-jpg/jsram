const userEmail="ram@google.com"

// if(userEmail){
//     console.log(" Got user Emial");
// }
// else{
//     log("Email not found");
// }

//falsy values
// false
// 0
//-0
// ""
// null
// undefined
// NaN
//BigInt 0n
//Nan
// truthy values
// "0".'false'," ",[],{},function(){},Infinity,-Infinity,

// if(userEmail.length===0){
//     console.log(" Array is empty")
// }

const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??) null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined ??15
val1=null ?? undefined ?? 25 ?? 50;

console.log(val1)

// ternary operator
//condition ? expr1 : expr2
const age=17
const canVote= age>=18 ? "can vote":"cannot vote"
console.log(canVote);