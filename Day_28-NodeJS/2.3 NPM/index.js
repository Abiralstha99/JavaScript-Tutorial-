// var generateName = require('sillyname');
// import generateName from "sillyname";
// var sillyName = generateName();


// console.log(`My name is ${sillyName}.`);


import superheroes from "superheroes";
const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${name}!`);
