const { log } = require("console");

//numbers
var num1 = 10;
console.log(num1); // 10
var num2 = 20.5;    
console.log(num2); // 20.5
console.log(typeof num1); // "number"



//Strings
var str1 = "Hello, World!";
console.log(str1); // "Hello, World!"
console.log(typeof str1); // "string"



//Booleans
//undefined         

//null
//Symbol
//BigInt
var population= 468646464467n; // BigInt for large integers
console.log(population); // 7n
console.log(typeof population); // "bigint"

//Objects
//Arrays

//numbers

var phoneNumber =  8989898821;
console.log(phoneNumber);//to print in your terminal

console.log(typeof phoneNumber); // "typeof" is a keyword to know what datatype your variable is holding
//bigint

var population =131414141424124124124n;
console.log(population);

console.log(typeof population); // "bigInt"


//string

var username = "demosalesmanager"
var pwd = '@Testleaf'

console.log(username);
console.log(pwd);

//typeof operator

console.log(`The datatype of username is `+ typeof username);
console.log(`The datatype of password is `+ typeof pwd);



//boolean

var accountNumberValid = true;
console.log(typeof accountNumberValid); 


//undefined

var accountNumber;
console.log(accountNumber); // undefined
console.log(typeof accountNumber); // get the datatype


//null

var landlineNumber = null; // datatype of null is going to be "object"
console.log(phoneNumber); // null
console.log(typeof landlineNumber); // it points to object because of A HISTORICAL BUG
