//if

// if(true) {
//     console.log("This will always execute.");
// }


const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("User is logged in.");
// }

// < ,> <= , > = , == , === , != , !==

// if(2=="2"){
//     console.log("executed")
    
// }
//  const temperature = 35;
// if (temperature > 30) {
//     console.log("It's a hot day.");
// } 
// console.log("temprature is greater than 25");


// const score=200
// if(score>100){
//      let power="fly"
//      console.log(`User power: ${power}`);  
// }
// console.log(`User power: ${power}`);


const balance = 1000;
// if(balance>500) console.log("test"),
// console.log("test2");

// if(balance<500){
// console.log("less than");
// }
// else if(balance<750){
// console.log("less than 750");
// }
// else if(balance<900){
// console.log("less than 900");
// }
// else{
//     console.log("more than 900")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("PURCHASE SUCCESSFUL"); 
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("USER LOGGED IN")
}