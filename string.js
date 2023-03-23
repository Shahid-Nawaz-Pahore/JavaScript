"use strict"

let name = "  shahid nawaz   ";
//convert string into number
name = +name
console.log(typeof(name));
//convert number into string
name = ""+name;
console.log(typeof(name))

let n1="11";
let n2="8787";
let n3 = +n1 + +n2;
//let n3=Number(n1)+Number(n2);
console.log(typeof(n3))

// console.log(name.length)
// //string indexing
// console.log(name[5])
// //string methods

// //1 trim
// name = name.trim();
// console.log(name.length)

// //to uppercase
// name = name.toUpperCase();
// console.log(name)

// //to lowercase
// name = name.toLowerCase();
// console.log(name);

// //slice
// console.log(name.slice(0,6))
// console.log(name.slice(6,12))
// console.log(name.slice(0,-1))
// console.log(name.slice(1))

//templete string
let myname="shahid nawaz";
let myage=22;
let aboutMe =`my name is ${myname} and my age is ${myage}  type of`
console.log(aboutMe ,typeof(aboutMe))