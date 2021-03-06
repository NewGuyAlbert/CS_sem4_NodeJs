// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

var person = {
    "name": "Donald",
    "age": 71
}

// Log the message 

console.log(myObj.message)
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
var me = {"name": "Albert", "age": 21}
console.log("I'm" , me.name , "and my age is" , me.age)
// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed)
// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description
thisSong.about = "Just a tribute."
//thisSong["about"] = "Just a tribute" 
console.log(thisSong.about)
// --------------------------------------

delete person.age;

person.newAttribute = "New value";