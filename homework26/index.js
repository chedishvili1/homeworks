function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'Total time for diffSubtract: ' + time1 );
  alert( 'Total time for diffGetTime: ' + time2 );

//TASKS
  //Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
    //Show it using alert.

//ANSWER:
    let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

let d2 = new Date("2012-02-20T03:12");
alert( d2 );

//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR

 // European countries have days of week starting with Monday (number 1), 
 // then Tuesday (number 2) and till Sunday (number 7). 
 // Write a function getLocalDay(date) that returns the “European” day of week for date.

 //ANSWER:
 function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

  //Create a function getDateAgo(date, days) to return the day of month days ago from the date.
//For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
//Should work reliably for days=365 or more:

//answer:
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
  alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

  //Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
//For instance, if now is 23:00, then:

function getSecondsToTomorrow() {
    let now = new Date();
  
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
  }

  
  function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }

  //tasks:Create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.

//ANSWERS:
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//We have an object storing salaries of our team:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390

  //Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  //TASKS:Create a script that prompts the visitor to enter two numbers and then shows their sum.
  //ANSWER:
  let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

//This loop is infinite. It never ends. Why?
//let i = 0;
//while (i != 10) {
//i += 0.2;
//}

//ANSWER: 
That’s because i would never equal 10.
