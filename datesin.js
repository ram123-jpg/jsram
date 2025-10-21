// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


//console.log(typeof myDate);
//let myCreatedDate = new Date(2025, 0, 25,4,5);
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date("10-21-2025");
//console.log(myCreatedDate.toLocaleString());

//console.log(myCreatedDate.getTime());
let myTimestamp = Date.now();
console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
  weekday:'long',
  timeZone:'Asia/Kolkata'
})



