let func = (arg1, arg2, ..., argN) => expression;

let func = function(arg1, arg2, ..., argN) {
    return expression;
  };

  let sayHi = () => alert("Hello!");

sayHi();

et age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//TASKS:
Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  //answer:
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  JavaScript specials:
  alert('Hello'); alert('World');

  alert("There will be an error after this message")

[1, 2].forEach(alert)

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

alert( 0 == false ); // true
alert( 0 == '' ); // true

The “switch” construct:
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

function sum(a, b) {
    let result = a + b;
  
    return result;
  }

  let sum = function(a, b) {
    let result = a + b;
  
    return result;
  };

  // expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;