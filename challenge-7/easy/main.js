function lengthOfTheString(){

    // First we take the texxt number from the user
    
    let svalue = document.getElementById("text").value;
   
    //let s= JSON.stringify(svalue)

    // convert string to upperCase

    let su = svalue.length;
    // Than we create the resultDOM
    let resultDOM = document.getElementById("result");
    resultDOM.innerHTML = su;
 
}

