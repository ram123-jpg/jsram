const myNumbers=[1,2,3,4,5,6,7,8,9,10]

 //const newwNums=myNumbers.map((num) => { return num+10})

 const newNums=myNumbers
     .map((num)=> num*10)
     .map((num)=> num+1)
     .filter((num)=>num>=40)
//  console.log(newNums);


// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },3)


const myTotal=myNumbers.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);
const shoppingCart=[
    {
        itemName:"python course",
        price:2999
    },
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"c++ course",
        price:2999
    },
    {
        itemName:"Ruby course",
        price:2999
    },
]

 const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
 console.log(priceToPay);
 





