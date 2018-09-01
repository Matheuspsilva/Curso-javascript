///////////////////////////////////////
// Lecture: Hoisting
/*
//functions
calculateAge(1983);

function calculateAge(year){
    console.log(2018 - year);
}

//retirement(1968);

var retirement = function(year){
    console.log(65-(2018-year));
}

retirement(1968);


//variables
console.log(age);
var age = 23;
console.log(age);


function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword
/*

//console.log(this);

calculateAge(1997);

function calculateAge(year){
    console.log(2018-year);
    console.log(this);
}

*/

var pessoa = {
    nome : 'matheus',
    birthYear: 1997,
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this.birthYear);
        /*
        function innerFunction(){
            console.log(this);
        }
        
        innerFunction();
        */
    }
}

pessoa.calculateAge(1985);

var mike = {
    name: 'mike',
    birthYear: 1990
      
};

mike.calculateAge = pessoa.calculateAge;
mike.calculateAge();







