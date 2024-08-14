// #primitive DataType
// 7 type: string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreVal = 5.9;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
const id = Symbol('23');
const anotherId = Symbol('23');

console.log(id === anotherId);

const bigNumber = 9845892734756263785684758738n;

// Reference Type (Non Primitive)
//Array, object, function

const heros = ["abc", "abcd", "ghure", "bvsuir"];
const person = {
    name: "Vatsal",
    age: 21
}

const myFun = function(){
    console.log("Hello world!");
}

console.log(typeof userEmail);

// https://262.ecma-international.org/5.1/#sec-11.4.3