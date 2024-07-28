// Basically we compare the two different data type like 
// string & int
 console.log(2>1);//true

//  For two different data type
console.log("02">1);//true;
// in above eg the js internnally convert string into number
// always compare same  type od data type becoz the js give unpredictable result
console.log(null>0);//false
console.log(null==0);//false 
console.log(null>=0);//true


// strick check 
// It check the value and data type both
console.log("2"==2);//true
console.log("2"===2);//false ( becoz it check value as well as data type of the value)



