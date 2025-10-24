// let index=0
// while(index<=10){
//     console.log(`value of index is ${index}`);
//     index=index+2
    
// }

// let myArray=[`flash`,`superman`,`batman`,`wonderwoman`]

// let arr=0
// while(arr<myArray.length){
//     console.log(`value is ${myArray[arr]}`)
//     arr++
// }
 
// let score=1
// do{
//     console.log(`score is ${score}`);
//     score++
// }
// while(score<=10);

//for of

//[" ", " ", " "]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num) 
// }

// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

//maps

// const map=new Map()
// map.set('name','ram')
// map.set('age',25)
// map.set('country','india')

// console.log(map)

// for (const [key,value] of map){
//     console.log(key,':-',value)  
// }


// const myObject={
//     'game1': 'NFS',
//     'game2': 'FIFA'

// }
// for (const [key,value] in myObject){
//     console.log(key, ':-', value);
    
// }
const myObject={
    JS:'JavaScript',
    PY:'Python',
    RB:'Ruby'
}

for (const key in myObject) {
 //console.log( myObject[key])
 //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming=["JavaScript","Python","Ruby","java","C++"]
for (const key in programming) {
   // console.log(programming[key]);
}
    
// const map=new Map()
// map.set('name','ram')
// map.set('age',25)
// map.set('country','india')

// for (const key in map) {
 
//     console.log(key)
// }

// map is not iterable with for...in loop


/*************** for each loop ***************/

//const coding=["JavaScript","Python","Ruby","java","C++"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// const myCoding=[
//     {
//         name:"JavaScript",
//         type:"Frontend"
//     },
//     {
//         name:"Python",
//         type:"Backend"
//     },
//     {
//         name:"Ruby",
//         type:"Backend"
//     },
// ]

// myCoding.forEach((item)=>{
//     console.log(item.name)
// })

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// //const newNums=myNums.filter((num)=> num>4)
// const newNums=myNums.filter((num)=> {
//     return num>4
// })

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)


    
