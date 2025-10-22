const marvel_heros=["thor","spiderman","ironman","hulk","captain america"];
const dc_heros=["batman","superman","flash","wonder woman"];
marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros =marvel_heros.concat(dc_heros);
// console.log( allheros);
// console.log(marvel_heros[5][1]);

const all_new_heros=[...marvel_heros,...dc_heros];
// console.log(all_new_heros);


const another_arr=[1,2,3, [4,5,6], 7,[6,7,[4,5]]];
const real_another_arr=another_arr.flat(Infinity);
// console.log(real_another_arr);



// console.log(Array.isArray("hello"))
// console.log(Array.from("hello"));

console.log(Array.from({name:"hello"}))// interesting


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));







