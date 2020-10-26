// Question 1

// Declare and initialise a variable with a string value.

var me = "myname";

// Question 2

// Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    age: 38,
    gender: "Male"
};

// Question 3

// Create a variable called outOfStock and assign it a boolean value.

// Create an if else statement that checks the value of outOfStock.

// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock")
}

// Question 4

// Create an array of five numbers.

// Loop through the array and console log each value.

var numbers = [1,2,3,4,5];
for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 5

// Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (i = 15; i <= 25; i ++) {
console.log(i);
}
// Question 6

// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (i = 15; i <= 25; i ++) {
    if (i === 20) { 
    console.log(i);
    }
}

/* Question 7
Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value. */

var array = [
    {
    string: "yes",
    number: 1,
    boolean: true
    },
    {
    string: "no",
    number: 2,
    boolean: false   
    }
];

for (var i = 0; i < array.length; i++) {
    console.log(array[i].number); 
    console.log(array[i].boolean); 
}

// Question 8

// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

// Inside the function, log the string "I don't like " together with the argument.

// Call the function and pass in a value of your choice.

/* Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes". */

function whatIDontLike(Foodtype) {
    console.log("I don't like" + " " + Foodtype);
}

whatIDontLike("Fish");

// Question 9 

//Create a function that accepts two arguments.

// Inside the function, subtract the second argument from the first and console log the result.

function twoarguments(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

twoarguments(1, 1);

// Question 10

// Create an empty array.

// Create a function that accepts one argument.

// Inside the function, add the argument to the array.

// Call the function and pass in a value of any type.

var emptyarray = [] 
{
    function empty(theargument) {
        console.log("the empty array" + " " + theargument)
    }
}
empty("is here");

// Level 2
// Question 1

// Using the loop from question 5 above, only log the counter variable if it is an even number.

// Hint:
// You can use the modulus % operator for this.

for (i = 15; i <= 25; i ++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}

// Question 2

// Create a function that logs the sentence "I am a function".

// Assign this function to a variable called innerFunction.

// Create another function called outerFunction that accepts one argument.

// Inside outerFunction, call the argument like you would a function - with parenthesis ().

// Call outerFunction and pass in the innerFunction variable.

function innerFunction() {
    console.log("im a function");
}

function outerFunction(argument) {
    
} 

outerFunction(innerFunction);

// This one confused me a little,, sorry.