const name="harry";
const repoCount=50
console.log(name+repoCount+"Value");
console.log(`hello my name ${name}  and repo count is ${repoCount}`);

const gameName=new String("Pu-bg");
//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('P'));


 const newString =gameName.substring(0,4)
 //console.log(newString);


 const anotherString=gameName.slice(-8,4)
 console.log(anotherString);
 
 
const newStringOne="  Hello World    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.youtube.com/watch%20=abcdefg"
console.log(url.replace('%20','-'))

console.log(url.includes('youtube'))


console.log(gameName.split('p'));





