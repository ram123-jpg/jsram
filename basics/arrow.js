const user={
    username:"ramyadav",
    prices:4000,
     welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
     }
        
    }
// user.welcomeMessage();
// user.username="tonystark"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="ramyadav"
//     console.log(this.user);
// }
// chai()


// const chai=function(){
//     let username="ramyadav"
//     console.log(this.username);
// }

const chai=() =>{
    let username="ramyadav"
    console.log(this);
}
//chai()

//  const addTwo=(num1,num2) => {
//     return num1+num2;
//  }

 //const addTwo=(num1,num2) => num1+num2
//  const addTwo=(num1,num2) => (num1+num2)

 const addTwo=(num1,num2) => ({username:"ramyadav"})
  console.log(addTwo(5,10))


  const myArray=[1,2,3,4,5]
  myArray.forEach()