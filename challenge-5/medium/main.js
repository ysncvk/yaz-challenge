function lengthOfTheString(){

    // First we take the texxt number from the user
    
    let svalue = document.getElementById("text").value;
   

    let wordCount = svalue.split(' ')


    // Than we create the resultDOM
    let resultDOM = document.getElementById("result");
    resultDOM.innerHTML = wordCount.length;
 
}

