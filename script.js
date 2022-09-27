'use strict'
console.log ("Rach");
console.info ("Blan");
console.warn ("Cirencester");
console.error ("Capricorn");

let mycar ="Ford";
let mymodel ="Pickup";
console.log("my fav car is " + mycar + " and the model is " + mymodel);

console.log("This is now %c the end of the exercises", "color: orange; font-family:fantasy; font-style:bold; background-color:black; padding:10px");


let a;
console.log(a);

let b = "12345";
console.log(b);

let d = true;
console.log(d);

let e = {a:"javascript"};
console.log(e);

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;
console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);



let strictA = true;
let strictB = 1;
console.log(strictA === strictB);

console.log(strictA !== strictB);

let age = 10;
if (age >=18 && age <= 65) {
    console.log("age is in range");
} else if (age <18) {
    console.log("underage");
} else {
    console.log("catch all else");
}



for (let i = 1; i<=100; i++) {
    if ((i %3 == 0) && (i % 5 ==0)){
    console.log("fizzbuzz");
 } else if (i % 3 == 0) {
    console.log("fizz");
 } else if (i % 5 == 0) {
    console.log("buzz");
} else {
console.log(i);
}}