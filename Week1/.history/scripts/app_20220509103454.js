//IIFE -- Immediately Invoked Function Expression
// AKA - Anonymous Self-Executing Function

(function()
{

    function Start()
    {
        console.log("App Started!...");

        for ( index = 0; index < 10; index++) {
            
            console.log(index);
            
        }
    }

    window.addEventListener("load", Start);

})();
