function isAsal(){

    // First we take the test number from the user
    
    let testNumber = document.getElementById("number").value;

    // Than we create the resulDOM

    let resultDOM = document.getElementById("result");

    //Now we are checking the number and writing the result
   if(testNumber <= 1) {
    resultDOM.innerHTML = `${testNumber} Asal Sayı Değildir`
   } else {
    if(testNumber == 2){
        resultDOM.innerHTML = `${testNumber} Asal Sayıdır`     
       } else {    
        for (i=2; i<testNumber; i++) {
            if (testNumber % i == 0) {
             resultDOM.innerHTML = `${testNumber} Asal Sayı Değildir`
             break;    
            } else {
             resultDOM.innerHTML = `${testNumber} Asal Sayıdır` 
            }
        }    
       }
   }
}

