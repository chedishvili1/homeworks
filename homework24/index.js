switch(x) {
    case 'value1'
      ...
      [break]
  
    case 'value2'
      ...
      [break]
  
    default:
      ...
      [break]
  }

  let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//TASKS:
// question??
    switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } 

  //answer:
  if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  //TASK 2:
  let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

//answer:
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//TASKS:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
  Is there any difference in the behavior of these two variants?
  //answer: no difference

  //TASK2:
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  Make two variants of checkAge:

Using a question mark operator ?
Using OR ||

//answer: function checkAge(age) {
    //return (age > 18) ? true : confirm('Did parents allow you?');}
  
    //function checkAge(age) {
        //return (age > 18) || confirm('Did parents allow you?'); }
     
//TASK 3:
Write a function min(a,b) which returns the least of two numbers a and b.
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//answer:
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  function min(a, b) {
    return a < b ? a : b;
  }

  //TASK 4:
  Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

//answer:
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
