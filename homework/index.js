alert(null || 2 || undefined);
//output:2 

alert(alert(1) || 2 || alert(3));
//output:1

alert(1 && null && 2);
// codes gonna show null because in&& it shows false

alert(alert(1) && alert(2));
// because of && it shows 1 starting from left first operand 1

alert(null || 2 && 3 || 4);
//The precedence of AND && is higher than ||, so it executes first.
// The result of 2 && 3 = 3, so the expression becomes:null || 3 || 4 
// Now the result is the first truthy value: 3.

if (!(age >=14 && age <=90))
if (age <14 || age > 90)    

    if (-1 || 0) alert( 'first' )
        //answer is -1
    if (-1 && 0) alert( 'second' );
    //answer is 0
    if (null || -1 && 1) alert( 'third' );
    //answer is 1


    let userName = prompt("Who's there?", '');
    if (userName === 'Admin') {
        let pass = prompt('Password?', '');
        if (pass === 'TheMaster') {
            alert( 'Welcome!' );
          } else if (pass === '' || pass === null) {
            alert( 'Canceled' );
          } else {
            alert( 'Wrong password' );
          }
        
        } else if (userName === '' || userName === null) {
          alert( 'Canceled' );
        } else {
          alert( "I don't know you" );
        }