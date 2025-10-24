 
function sayMyName(){
 console.log("H");
 console.log("I");
 console.log("J");
 console.log("K");
 console.log("L");
 console.log("M");
 console.log("N");
}

//sayMyName()


// function addTwoNumbers(num1,num2){
// console.log(num1+num2);
// }


function addTwoNumbers(num1,num2){
//  let result=num1+num2;
//  console.log("Ram");
//  return result;
return num1+num2;
}

const result=addTwoNumbers(5,10);
// console.log("Result:", result)

function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
}
return `${username} just logged in`;

}

// console.log(loginUserMessage("ramyadav"))
//   console.log(loginUserMessage())

function calculateCartPrice(...num1){
return num1
}
// console.log( calculateCartPrice(29,30,40,50))


const user={
    username:"ramyadav",
    prices:4000,
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }


 //handleObject(user)
 handleObject({
    username:"shubham",
    price:5000
 })


 const myNewArray=[1,2,3,4,5,6,7,8,9];
 function returnSecondValue(getArray){
       return getArray[1];
 }
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,4,5,6,7,8,9]));

