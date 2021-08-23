class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        //add code to return true if correct answer entered.
            text(code,300,300) 
            if(actualCode === enteredCode.toUpperCase()) {
            return true 
            }else {
            return false }

        
    }

}