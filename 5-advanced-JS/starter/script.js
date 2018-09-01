//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth:1990,
    job: 'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('Jonh',1990,'teacher');
var jane = new Person('Jane',1969,'Designer');
var mark = new Person('Mark',1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


var Carro = function(ano,modelo,cor,tipo) {
    this.ano = ano;
    this.modelo = modelo;
    this.cor = cor;
    this.tipo = tipo;
}

Carro.prototype.ligarFarol = function(){
    console.log("Farol Ligado");
}

carro1 = new Carro(1999,'gol','cinza','hatch popular');

carro1.ligarFarol();

*/

//Object.create

/*
var personProto = {
    calculateAge : function(){
        console.log(2018- this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name:{value: 'Jane'},
    yearOfBirth:{value:1969},
    job:{value:'designer'}

});
*/




//Primitives vs objects
/*

//Primitives

var a = 23;
var b = a;

a = 46;

console.log(a,b);

//Objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions

var age =27;

var obj={
    name:'Jonas',
    city:'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

//////////////////////////////////////
//Passing Functions as Arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i =0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calcAge(el){
    return 2018 - el;
}

function isFullAge(el){
    return el >=18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9  - (0.67 * el));
    }else{
        return -1;
    }  
}

var ages = arrayCalc(years,calcAge);
console.log(ages);
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages,maxHeartRate);
console.log(rates);
*/

////////////////////
//Functions returning functions
/*
function interviewQuestion(job){
    if(job === 'Designer'){
        return function(name){
            console.log(name +', can you please explain what UX design is? ');
        }
    }else if(job === 'Teacher'){
        return function(name){
            console.log(name +', what subject do you teach ? ');
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');


teacherQuestion('John');
designerQuestion('John');

interviewQuestion('Teacher')('Mark');

*/

////////////////////
//IIFE
/*
function game(){
    var score = Math.random()*10;
    console.log(score >= 5);
}

game();


(function(){
    var score = Math.random()*10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

////////////////////
//Closures

/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age)+ a);
    }
}

var retirementUS = retirement(66);

var retirementGermany = retirement(65);

var retirementIceLand = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceLand(1990);

//retirement(66)(1990);


function interviewQuestion(job){
    return function(name){
        if(job === 'Designer'){
            console.log(name +', can you please explain what UX design is? ');
        }else if(job === 'Teacher'){
            console.log(name +', what subject do you teach ? ');
        }else{
            console.log('Hello '+ name + ', what do you do?')
        }
    }
}

interviewQuestion('Teacher')('john');
interviewQuestion('Designer')('john');
*/

////////////////////
//Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good'+ timeOfDay + ', Ladies and gentlemen I\'m ' + this.name + ', I\'m a ' + this.job +', and I\'m  '+ this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m '+ this.name +', I\'m a ' + this.job +', and I\'m '+ this.age+ ' years old. Have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35, 
    job: 'designer'
};

john.presentation('formal','morning');
john.presentation('friendly','night');

john.presentation.call(emily,'friendly','night');

//john.presentation.apply(emily,['friendly','afternoon']);

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('afternoo');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i =0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calcAge(el){
    return 2018 - el;
}

function isFullAge(limit,el){
    return el >=limit;
}

var ages = arrayCalc(years,calcAge);

var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);

*/
/*

(function(){
    function Question(questao,alternativas,posResposta)
{
    this.questao = questao;
    this.alternativas = alternativas;
    this.posResposta = posResposta;
}

Question.prototype.displayQuestion = function(){
    console.log(this.questao);
    for(var i = 0; i < this.alternativas.length; i++){
        console.log(this.alternativas[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans == this.posResposta){
        console.log('Resposta Correta');
    }else{
        console.log('Resposta Errada');
    }
}



var qSoma = new Question('Quanto é 1+3 ?',['0: 1','1: 2','2: 3','3: 4'],3);
var qHistoria = new Question('Quem descobriu o Brasil ?',['0 - Pedro Alvares Cabral','1- Lula','2 -Bolsonaro','3- Sarney'],0);
var qGeografia = new Question('Qual é capital do Amazonas ?',['0- Belém<br>','1-Curitiba','2- Manaus','3- Recife'],2);

var questoes = [qSoma,qHistoria,qGeografia];

function initGame(){
    var isPlaying = true;
    var respostaUsuario;


    var numQuestao = Math.floor(Math.random() * questoes.length );
    questoes[numQuestao].displayQuestion();
    respostaUsuario = prompt('Please Select de Correct Answer');
    questoes[numQuestao].checkAnswer(respostaUsuario);

}


initGame();


});
*/

//Expert Level



//(function(){
function Question(questao,alternativas,posResposta)
{
    this.questao = questao;
    this.alternativas = alternativas;
    this.posResposta = posResposta;
}

Question.prototype.displayQuestion = function(){
    console.log(this.questao);
    for(var i = 0; i < this.alternativas.length; i++){
        console.log(this.alternativas[i]);
    }
}

Question.prototype.checkAnswer = function(ans, callback ){
    var sc;
    if(ans === this.posResposta){
        console.log('Resposta Correta');
        sc = callback(true); 
    }else{
        console.log('Resposta Errada');
        sc = callback(false);
    }

    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is:'+ score);
    console.log('-----------------------------');

}


var qSoma = new Question('Quanto é 1+3 ?',['0: 1','1: 2','2: 3','3: 4'],3);
var qHistoria = new Question('Quem descobriu o Brasil ?',['0 - Pedro Alvares Cabral','1- Lula','2 -Bolsonaro','3- Sarney'],0);
var qGeografia = new Question('Qual é capital do Amazonas ?',['0- Belém<br>','1-Curitiba','2- Manaus','3- Recife'],2);
var questoes = [qSoma,qHistoria,qGeografia];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion(){
    var respostaUsuario;

    var numQuestao = Math.floor(Math.random() * questoes.length );
    questoes[numQuestao].displayQuestion();

    var respostaUsuario = prompt('Please Select de Correct Answer');


    if(respostaUsuario !== 'exit'){
        questoes[numQuestao].checkAnswer(parseInt(respostaUsuario), keepScore);
        nextQuestion(); 
    }

}

nextQuestion();

//});









