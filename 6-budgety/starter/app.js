//BUDGET CONTROLLER

var budgetController = (function(){

    //Some Code 

})();


//UICONTROLLER
var UIController = (function(){
    //Cria estrutura com inputs para manter o código mais fácil de manter
    var DOMstrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn: '.add__btn'
    };

    return{
        getinput: function(){
            return { 
                type: document.querySelector(DOMstrings.inputType).value,// exp or inc
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };        
        },

        //Retorna DOMstrings para utilizar em outros Módulos
        getDOMstrings: function(){
            return DOMstrings;
        }

    };

})();


//GLOBAL APP CONTROLLER 
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListiners = function(){
        var DOM = UICtrl.getDOMstrings(); // salvando DOMstrings para ser utilizado nesse módulo
        document.querySelector(DOM.inputBtn).addEventListener('click',crtlAddItem);
        
        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which ===13){ //Código da tecla Return
                crtlAddItem();
            }
        });
    };

    

    var crtlAddItem = function(){
        //1.Get the filed input data
        var input = UICtrl.getinput();
        console.log(input);

        //2.add the item to the budget controller

        //3.add item to UI

        //4.Calculate the Budget

        //5 .Display the Budget opn the UI

    };

    return{
        init: function(){ 
            console.log("App started");
            setupEventListiners();
        }
    }


    })(budgetController,UIController);//Objetos passados por parâmetro

controller.init();


