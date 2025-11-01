// let myNAME="Ram"
// console.log(myNAME.length);

// console.log();

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
        
    }

}

Object.prototype.Ram=function(){
    // console.log(`Ram is present in all object`);
    
}
Array.prototype.heyRam=function(){
    // console.log(`Ram says hello`);
    
}
//heroPower.Ram()
// myHeros.Ram()
// heroPower.heyRam()
// myHeros.heyRam()

// inheritance

const User={
    name:"username:chai",
    email:"chai.goole.com"
}

const  Teacher={
    makeVideo: true
}
 const TeachingSupport={
    isAvailable: false
 }
 const TASupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
 };
 
//  Teacher__proto__=user
 //modern syntax
 Object.setPrototypeOf(TeachingSupport,Teacher)

 let anotherUsername="ChaiAurCode    "

 String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
 }
    anotherUsername.trueLength()
    "Ram".trueLength()
    "iceTea".trueLength();