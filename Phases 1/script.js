// 1. var

/* 

var ES6 s pehle use hota tha variables ko decleared krne k liye but abhi hume let aur const ka use krte hai

- block rules ko follow nahi krta hai
- bugs bhi aate hai

*/

console.log("var:")

if(true) {
    var a = 10
    console.log(a)
}
console.log(a)

// 2. let

/*

let ES6 m aaya tha isko var ka modify version bhi keh skte hai hum kyuki y var m jo bhi kamiya thi usko puri krta hai jese ki - block rules ko follow krna aur bugs bhi kam aate hai

*/

console.log("let:")

if(true) {
    let data = 20
    console.log(data)
}


// console.log(data) /* yaha p humko ek chhota sa error dekhne ko milte hai jo let k karna aaya hai */

