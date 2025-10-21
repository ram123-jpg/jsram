// # Primitive

// 7 primitive data types in JavaScript:
// 2. String ,number,boolean ,null,undefined,symbol,BigInt
 const score=100; //number
    const scoreValue="100"; //string
    const isLoggedIn=false; //boolean
    const outsideTemp=null; //null
    let userEmail; //undefined
    const id=Symbol("123"); //symbol
    const anotherId=Symbol("123"); //symbol

    console.log(id== anotherId);
    const bigNumber=32256567557643n
// Refrence type(Non-primitive)

//Array,object,functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
  name:"Ram",
  age:22,
}

 const myFunction =function(){
    console.log("hello world");
    
 }

 console.log(typeof heros );


 // stack(primitive), heap(non-primitive) memory


 let myYoutubename="codewithharry";

 let anothername=myYoutubename;
 anothername="codewithvishal";
 console.log(myYoutubename);
 console.log(anothername);
 
   let userOne={
      email:"user@google.com",
      upi:"user@ybl"
   }

   let userTwo=userOne;
   userTwo.email="ram@google.com"
   console.log(userOne.email);
   console.log(userTwo.email);