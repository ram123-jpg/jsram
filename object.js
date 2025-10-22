//singleton

//object literals

const mySym=Symbol("key1");

const JsUser={
    name:"Ram",
    "full name":"Ram Devendra yadav",
    [mySym]:"mykey1",
    age:24,
    location:"India",
    email:"ram@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="ram@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email="ram@microsoft.com"
// console.log(JsUser);


JsUser.greeting=function(){
    // console.log("Hello JsUser");
}
JsUser.greetingTwo=function(){
    // console.log(`hello js user, ${this.name}`); 
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//const tinderUser=new Object();
const tinderUser={};

    tinderUser.id="12354"
    tinderUser.name="tony"
    tinderUser.isLoggedIn=false

  //console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"tony",
            lastname:"stark"
        }
    }
}
    

  //console.log(regularUser.fullname?.userfullname?.firstname );


  const obj1={1:"a",2:"b"};
  const obj2={3:"c",4:"d"};
  //const obj3=Object.assign({},obj1,obj2);
  const obj3={...obj1,...obj2}; 
    //console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


//    console.log(tinderUser.hasOwnProperty('isLogged'));


   const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"devendra",    
   }
   
// course,courseInstructor
const {courseInstructor:instructor}=course;
//console.log(courseInstructor);
 console.log(instructor);

//  const navbar=({company})=>{
     
//  }

//  navbar(company="amazon");

//  console.log(company);

// {
//    "name":"devendra",
//    "age":24,
//     "company":"amazon"    

// }


[

    {},
    {},
    {}
]