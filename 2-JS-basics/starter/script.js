/*

var firstName = 'En';
console.log(firstName)

// number
// string
// boolean
// undefined
// null

// dynamic typing: data types are automatically assigned

var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);

// variable name must be meaningful

var job;
console.log(job);
job = 'Teacher';
console.log(job);
*/

// var firstName = 'John';
// var age = 28;
//
// // convert types as it needed
// console.log(firstName + ' ' + age);
//
// // declare multiple variables
// var job, isMarried;
// job = 'Teacher';
// isMarried = false;
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // variable mutation, i.e. dynamically typing
// var lastName = prompt('What is his last name?');
//
/*

basic operators

*/
// var year, yearJohn, yearMark, ageJohn, ageMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// //logical


// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
//
// //typeof
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
//
// var x;
// console.log(typeof x);

// Operator Precedencs
//


/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/


// var massJohn, massMark;
massJohn = 75;
massMark = 80;
var heightJohn, heightMark;
heightJohn = 1.75;
heightMark = 1.80;
var bmiJohn, bmiMark;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log('bmiJohn: ' + bmiJohn);
console.log('bmiMark: ' + bmiMark);
// console.log('Is Mark"s BMI higher that John' + bmiMark > bmiJohn);
if (bmiMark > bmiJohn) {
    console.log('Is Mark"s BMI higher that John');
}

// if/else statement
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + 'will hopefully marry soon :)')
}