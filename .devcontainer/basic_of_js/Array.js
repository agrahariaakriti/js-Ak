// Traversing through array :--->
// Array.from loop
let s="Aakriti";
let arr=Array.from(s);
console.log(arr);
// Output
// ['A', 'a', 'k','r', 'i', 't', 'i']

// for -of
let num=[1,2,33,23,3];
// for(let x of num)
// {
//     console.log(x);
// }
// map method in array 
let arr2=num.map((value,index,array)=>{
console.log(value,"   ",index," ",array);
    return value>10;
});
console.log(arr2);
console.log(num);

// forEach() loop
// num.forEach((value)=>{
//     console.log(value);    
// });

// filter method of array 
// num=[1,2,33,23,3];
let num2=num.filter((value)=>{
    return value>10;
})
console.log(num2);

// qestion on array
// question 1
// let q_arr=[1,2,3,4,5];
// let no=prompt("enter the no ");
// let new_arr=q_arr.map((value)=>
// {
//     return value+no;
// })

// Question 3

let Q_arr=[10,15,24,18,30,48,90];
let new_arr=Q_arr.filter((value)=>
{
    // return value%10==0;
})
console.log(new_arr);
// Question 4
let random=Number.parseInt(Math.random()*100);
console.log(random);


