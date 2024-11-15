//object literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Sambridi", // No quotes needed for single word identifiers
    "full name": "Sambridi Guragai", //keys: value Quotes needed for keys with spaces
    [mySym]: "mykey1",
    age: 18,
    location: "gettysburg",
    email: "adams@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "sambridi@google.com";
// Object.freeze(JsUser);
// JsUser.email = "sambridi@gettysburg.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
