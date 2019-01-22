///////////////////////////////////////
// Lecture: Hoisting
//
/* function calculateAge(year) {
 *     console.log(2016 - year);
 * }
 *
 * var retirement = function (year) {
 *     console.log(65 - (2016 - year));
 * }
 *
 * // retirement(1990);
 *
 * // variables
 * console.log(age);
 * var age = 23;
 * function foo() {
 *     var age = 65;
 *   console.log(age);
 * }
 * foo();
 * console.log (age);
 *
 *
 *
 *
 *
 *  */







///////////////////////////////////////
// Lecture: Scoping
/*
 * lexically scop: child funtion can access its parent function scope.
 * javascript creates scope with function only.
 *  */
// First scoping example


/* var a = 'Hello!';
 * first();
 *
 * function first() {
 *     var b = 'Hi!';
 *     second();
 *
 *     function second() {
 *         var c = 'Hey!';
 *         console.log(a + b + c);
 *     }
 * }
 *  */



// Example to show the differece between execution stack and scope chain
/* 
 *
 * var a = 'Hello!';
 * first();
 *
 * function first() {
 *     var b = 'Hi!';
 *     second();
 *
 *     function second() {
 *         var c = 'Hey!';
 *         third()
 *     }
 * }
 *
 * function third() {
 *     var d = 'John';
 *     [> console.log(c); <]
 *     console.log(a+d);
 * }
 *  */



///////////////////////////////////////
// Lecture: The this keyword
/* Regular function call
 * Method call, points to the object that is calling the method
 *
 *
 * */

console.log(this);
function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016-this.yearOfBirth);
        function innerFunction() {
            console.log(this);
        }
      innerFunction();
    }
    
}
john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1994
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();


