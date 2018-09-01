//Variable Names

/*

var firstName = 'Matheus';
console.log(firstName);
var lastName = 'Silva';
var age = 20;
var fullAge = true;
var job;
console.log(firstName+' '+lastName+' '+age+' years old');


var country = prompt('What is yout country?')
console.log(country);
console.log(typeof country);

*/

/********************************/
/****IF ELSE STATEMENTS *********/
/********************************/

/*

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'single'){
    console.log(firstName+" is single");

}else{
    console.log(firstName+" is married");
}

var ismarried = false;


if(ismarried){
    console.log(firstName+" is married");

}else{
    console.log(firstName+" is single");
}
*/

/********************************/
/****BOOLEAN LOGIC *********/
/********************************/
/*
var firstName = 'John';
var age = 89;

if(age<13){
    console.log(firstName+ 'is a boy');
}else if(age >= 13 && age < 20){
    console.log(firstName+ 'is a teen');
}else if(age >= 20 && age < 65){
    console.log(firstName+ 'is a adult');
}else if(age > 65){
    console.log(firstName+ 'is a elderly');
}
*/

/***********************************************/
/***The ternary Operator and Switch Statement **/
/***********************************************/
/*
var firstName = 'John';
var age = 31;

//ternary operator
age >= 18  ? console.log(firstName +' drinks beer'): console.log(firstName +' drinks Juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

//switch statement
var job = 'designer';

switch(job){
    case 'teacher':
    case 'professor':
        console.log(firstName +" teach person");
        break;
    case 'engineer':
        console.log(firstName +" built bridges"); 
        break;
    case 'designer':
        console.log(firstName +" designs beautiful websites");
        break;
    default:
        console.log(firstName +" does something else");

}


switch(true){
    case age < 13:
        console.log(firstName+ 'is a boy');
        break;
    case (age >= 13 && age < 20):
        console.log(firstName+ 'is a teen');
        break;
    case (age >= 20 && age < 65):
        console.log(firstName+ 'is a adult');
        break;
    default:
        console.log(firstName+ 'is a ');  

}
*/

/***********************************************/
/*Truthy and Falsy values and equality operators*/
/***********************************************/

// Falsy values: undefinied,null,0,'', NaN
// Truthy values: Not falsy values
/*
var height = 0; 

if(height || height === 0){
    console.log('Variable is definied');   
}else{
    console.log('Variable has NOT been definied');  
}

// Equality operators
if(height =='23'){
    console.log('The == does type coercion');
}

if(23 ==='23'){
    console.log("true")
}
*/

/***********************************************/
/*Coding Challenge 2*/
/***********************************************/

/*

var JohnTeamAvarageScore = (89+120+103)/3;
var MikeTeamAvarageScore = (116+123+94)/3;

if(JohnTeamAvarageScore < MikeTeamAvarageScore){
    console.log('Mike Team WINS, average score: '+MikeTeamAvarageScore);   
}else if(JohnTeamAvarageScore > MikeTeamAvarageScore){
        console.log('John Team WINS, average score: '+JohnTeamAvarageScore);   

} else{
    console.log('Draw');
}

var JohnTeamAvarageScore = (89+120+103)/3;
var MikeTeamAvarageScore = (116+123+94)/3;
var MaryTeamAvarageScore = (97+134+105)/3;



if((MaryTeamAvarageScore || JohnTeamAvarageScore) < MikeTeamAvarageScore ){
    console.log('Mike Team WINS, average score: '+MikeTeamAvarageScore);   
}else if(JohnTeamAvarageScore > (MikeTeamAvarageScore || MaryTeamAvarageScore)){
        console.log('John Team WINS, average score: '+JohnTeamAvarageScore);   

}else if(MaryTeamAvarageScore > (JohnTeamAvarageScore || MikeTeamAvarageScore)){
        console.log('Mary Team WINS, average score: '+MaryTeamAvarageScore);   

}else{
    console.log('Draw');
} 

*/

/***********************************************/
/*****************Functions*********************/
/***********************************************/

/*
function calculateAge(birthYear){
    return 2018 - birthYear; 
}

var myAge = calculateAge(1997);
console.log(myAge);

function yearsUntilRetirement(year, firstName){
    var age  = calculateAge(year); 
    var retirement = 65 - age;
    if(retirement > 0 ){
        console.log(firstName + " retires in " + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired');
    }


}

yearsUntilRetirement(1997, "matheus");

*/

/***********************************************/
/******Functions Statements and Expressions*****/
/***********************************************/

/* Function Expression */
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
    case 'teacher':
    case 'professor':
        return firstName +" teaches people";
    case 'engineer':
        return firstName +" built bridges"; 
    case 'designer':
        return firstName +" designs beautiful websites";
    default:
        return firstName +" does something else";

}   

}

 console.log(whatDoYouDo('teacher','John'));
 */

/***********************************************/
/******************Arrays*******************/
/***********************************************/
/*

//initialize new array
var names = ['matheus','pedro','lucas','joao'];
var years = [1997,1985,1986,1991];

console.log(names[0],years[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
console.log(names);
names[names.length] = 'mary'
console.log(names);

//Different data types
var john = ['John','Smith',1990,'teacher',false];

console.log(john);

john.push('blue');
console.log(john);

john.unshift('Pizza');
console.log(john);

john.pop()
console.log(john);

john.shift()
console.log(john);

console.log(john.indexOf(1990));

var inArray = john.indexOf(1990) === -1 ? "not in the array" : 'in the array';

console.log(inArray);
*/

/***********************************************/
/**************Coding challenge 3***************/
/***********************************************/

/*
var bills = [124,48,268];

function calcularCorjeta(conta){
    if(conta <50){
     return  tip = conta *0.2;
    }else if(conta >50 && conta <200){
        return  tip = conta *0.15;
    }else if(conta>200){
        return  tip = conta *0.1;
    }
    else{
        console.log("Valor invalido")
    }
}

var Tip = [];
var billsAndTip =[];

for(i=0;i<bills.length;i++){
    var corjeta = calcularCorjeta(bills[i]);
     Tip[i] = corjeta;
     billsAndTip[i] = bills[i]+Tip[i];
}
console.log(Tip);
console.log(billsAndTip)
*/

/*
var Tip = [calcularCorjeta(bills[0]),calcularCorjeta(bills[1]),calcularCorjeta(bills[2])];
console.log(Tip);

var billsAndTip = [Tip[0]+bills[0],Tip[1]+bills[1],Tip[2]+bills[2]];

console.log(billsAndTip)
*/

/***********************************************/
/************Objects and properties*************/
/***********************************************/
/*
//Object literal
var john = {
    firstName:'Matheus',
    lastName:'Pereira',
    birthYear:20,
    family: ['Pedro','Paula','João'],
    job: 'businessman',
    isMarried: false
}

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
console.log(john['lastName']);

john.job = 'engineer';

john['ismarried'] = true;

console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.birthYear = '1989';
console.log(jane);

*/

/***********************************************/
/*************Objects and Methods**************/
/***********************************************/
/*
var john = {
    firstName:'Matheus',
    lastName:'Pereira',
    birthYear:1990,
    family: ['Pedro','Paula','João'],
    job: 'businessman',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john);
*/

/*

var john = {
    fullName : 'John',
    mass : 92, 
    height : 1.85,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height)
    }
}

var mark = {
    fullName : 'Mark',
    mass : 78, 
    height : 1.75,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height)
    }
}

john.calcBmi();
mark.calcBmi();

console.log(john,mark);

if(john.bmi === mark.bmi){
    console.log("Eles têm o mesmo bmi");
}else if(john.bmi > mark.bmi){
    console.log("John tem o maior bmi");
}else if(john.bmi < mark.bmi){
    console.log("Mark tem o maior bmi");
}

*/

/***********************************************/
/**************Loops and interation*************/
/***********************************************/
/*
var john = ['Matheus','Pereira',1990,'businessman'];
    

for(var i=0;i<john.length;i++){
    console.log(john[i]);
}
    
for(var i=0;i<10;i++){
    console.log("loop "+i);
}


//While loop
i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
}
*/

//Continue and break statements

var john = ['Matheus', 'Pereira', 1990, 'businessman'];

var i = 0;

for (i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
    
}

for( i =0;i<john.length;i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);

}











