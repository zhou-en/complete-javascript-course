// // Function constructoo
/* 
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john, jane, mark);

 */

// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane = Object.create(
    personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1996},
        job: {value: 'designer'}
    });