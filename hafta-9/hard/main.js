
function mean(){

    let sentence = document.getElementById("text").value;
    
    console.log(sentence);
    

    const array = sentence.split(" ");

    console.log(array.length);

    let resultArray = [];

    let resultArrayLowerCase = array.map(item => item.toLowerCase());

    console.log(resultArrayLowerCase)


    for (let i=0; i < resultArrayLowerCase.length; i++) {
        
            if (resultArrayLowerCase [i] === resultArrayLowerCase[i+1]) {
                 resultArray.push(resultArrayLowerCase[i])
                 
            }
    }

    console.log(resultArray)

    // We create the resulDOM

    let resultDOM = document.getElementById("result");


    if (resultArray.length === 0) {
        resultDOM.innerHTML = "Girdiğiniz cümlede ikileme bulunmamaktadır."
    } else {
        resultDOM.innerHTML = "Girdiğiniz cümlede ikileme vardır."
    }
    

    for ( let i=0 ; i< resultArray.length; i++) {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = resultArray[i];
        resultDOM.appendChild(liDOM)
    }

        

}

