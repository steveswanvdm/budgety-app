/*
immediatllty invoked function expression iife (anonomouse function wrappe din perenthesis)

secret of the module pattern is it returns an object containing all of the functions we want to be public
budgetController becomes an object containing publicTest Method
*/


/**********  BUDGET CONTROLLER MODULE ******************* */
var budgetController = (function(){

    var x = 23;
    var add = function(a){
        return x + a; 
    };

    // exposed to the public
    return {
        publicTest: function(b){
            return add(b);
        }
    };

})();// invokes the function immewdiatly


/**********  USER INTERFACE MODULE ******************* */

var UIController = (function(){

})();



/**********  APP CONTROLLER MODULE ******************* */

var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);// z not accessible from the outside

    // gives access 
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
})(budgetController, UIController);
