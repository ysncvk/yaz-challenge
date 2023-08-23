function factorial(){

    // First we take the test number from the user
    
    let testNumber = document.getElementById ("number").value;

    // Than we create the resulDOM

    let resultDOM = document.getElementById("result");

    let result = 1;

    //Now we are checking the number and writing the result

    for (let i = 0;  i<testNumber; i++) {
        result = result*(testNumber-i)
        console.log(result)
    }
   
    
    resultDOM.innerHTML = `${testNumber} sayısının fakttoriyeli : ${result}`
}

