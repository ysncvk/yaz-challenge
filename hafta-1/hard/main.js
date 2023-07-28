function findNumbers(){
    // define the array of natural numbers and fulfill the array
    let arrayNUmbers = [];

    for (let i=1; i<=100; i++){
        arrayNUmbers.push(i)
    }
    
    // First we take the number from user
   const targetNumber = document.getElementById("numberid").value;
   let result = "";
    
    // Now finding the two numbers and writing them in result
    if (targetNumber>100 || targetNumber<2){

        result = " Lütfen 2 ila 100 arasında bir sayı girin"

    } else {

        if (targetNumber < 10) {
         
            for (let i=0; i<targetNumber/2; i++) {
                let x = arrayNUmbers[i];
                let y =  targetNumber-arrayNUmbers[i];
                result = result + x + "+" + y + "<br>"
            }
    
        }  else {
            for (let i=targetNumber%10; i<targetNumber-1; i++) {
                let x = arrayNUmbers[i];
                let y =  targetNumber-arrayNUmbers[i];
                result = result + x + "+" + y + "<br>"
            }
        }
        
    }
    

    // We are writing the result in html document
    let resultDOM = document.getElementById("result");
    resultDOM.innerHTML = `${result}`;
   

}