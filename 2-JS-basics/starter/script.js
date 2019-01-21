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
// massJohn = 75;
// massMark = 80;
// var heightJohn, heightMark;
// heightJohn = 1.75;
// heightMark = 1.80;
// var bmiJohn, bmiMark;
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
// console.log('bmiJohn: ' + bmiJohn);
// console.log('bmiMark: ' + bmiMark);
// // console.log('Is Mark"s BMI higher that John' + bmiMark > bmiJohn);
// if (bmiMark > bmiJohn) {
//     console.log('Is Mark"s BMI higher that John');
// }
//
// // if/else statement
// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + 'will hopefully marry soon :)')
// }

/*
* Ternary  Operators
*
* */
/*

var firstName = 'John';
var age = 22;

// Ternary Operations
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' dives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age =10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/

/*
*
* Truthy and Falsy values and equality operators
*
* */

// falsy: undefined, null, 0, '', NaN
// true: NOT falsy values

// var height;
// height = 123;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined');
// }
//
// // Equality operators
// if ( height == '123') {
//     console.log('The == operator does type coercion!');
// }


/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
//
// var scoreJohn = ( 89+120+103)/3;
// var scoreMike = (116+94+123)/3;
// var scoreMary = (97+134+105)/3;
// console.log(scoreJohn, scoreMike, scoreMary);
//
// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\' team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a drew.');
// }

/*
* Functions
* */

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike  = calculateAge(1948);
// var ageJane = calculateAge(1873);

// console.log(ageJohn, ageMike, ageJane);

// function yearUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years');
// }

// yearUntilRetirement(1990, 'John');
// yearUntilRetirement(1948, 'Mike');
// yearUntilRetirement(1969, 'Jane');


/*
* Function Expressions
* */
// // function declaration
// function whatDoYouDo2(job, firstName) {

// }
// // function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs pretty website.';
//         default:
//             return firstName + ' does something else.'
//     }
// }
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));


/*
    Arrays
*/
// // initialize new arrays
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// // mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names, names.length);
// console.log(names);

// // different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
// john.push('blue');
// john.unshift('Mr ');
// console.log(john);
// // remove items
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
// // 
// console.log(john.indexOf(1990))

// var isDesigner = john.indexOf('designer') === -1 ? 'Johon is NOT a designer' : 'John is a designer';
// console.log(isDesigner);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// // console.log(tipCalculator(10));
// var bills = [124, 48, 268];
// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ]
// var finalValues = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ]

// console.log(tips);
// console.log(finalValues);

/*
    Objects and Properties
*/

// // object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// // access using dot notation
// console.log(john.firstName);
// // access using brackets
// var x = 'birthYear';
// console.log(john[x]);
// // mutate object
// john.job = 'designer';
// john.isMarried = true;
// console.log(john)
// //initialize using new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*
    Objects and Methods
*/
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };
// john.calcAge()
// console.log(john);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
// var john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// var mark = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI');
// }

/**
 * Loops and iterations
 */
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i < 20; i+= 2) {
    console.log(i);
}

var john = [
    'John', 'Smith', 1990, 'designer', false
];
// for (var i = 0; i<john.length; i++) {
//     console.log(john[i])
// }
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// for (var i = 0; i<john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i<john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

for (var i = john.length -1; i >= 0; i--) {
    console.log(john[i]);
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = this.finalValues = [];
        for (var i = 0; i< this.bills.length ; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // add results to the corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77,475,110,45],
    calcTips: function() {
        this.tips = this.finalValues = [];
        for (var i = 0; i< this.bills.length ; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            // add results to the corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i=0; i<tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
console.log(john);

mark.calcTips();
console.log(mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s fmaily pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with avarage of $' + mark.average);
}