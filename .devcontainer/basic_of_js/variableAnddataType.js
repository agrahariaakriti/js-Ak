//  let is the reserve keyworld in js
//   used to create variable . By using Let variable can ,be updated but can
//  not be re decalared
//  const variable can not be redeclared neither 
// update .byusing var variable can be redeclared and can be can be updated

// let s="aakriti";string
// let age="22";number
// let no="987654321";bigInt
// boolean =>true/false;
// null =>standalone value;
// undefine=>special type;
// symbol =>used for uniques

// non primitive
// 1:- object

// typeof()=> used to find data type of variable
console.log(typeof(undefined));//type undefine
console.log(typeof null);//type object

// Type conversion from one data type to other
let s="22nm";
console.log(typeof s);
let score=(Number)(s);
console.log(score);//Nan=not a no
console.log(typeof  score);


// if string is a number it can connvered in to number
// but if string+number is a string i,e str="33mn"
// then it cannot convert to number
// boolean-->To-->number (0/1)
// 1-->true
// ""-->false
// "aakrit"-->true;
let number=44;
let ss=(String)(number);
console.log(typeof ss);//string
// number To string converted;




