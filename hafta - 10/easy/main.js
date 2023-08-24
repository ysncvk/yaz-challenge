
let array = [];
function addArray () {
   
    let item = parseInt(document.getElementById("number").value);
    array.push(item)
    let arrayDOM = document.getElementById("array");
    arrayDOM.innerHTML = array;
    document.getElementById("number").value =''
    
    
}

function mean(){

    // We create the resulDOM

    let resultDOM = document.getElementById("result");
    let bigNumber = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] > bigNumber) {
            bigNumber = array[i];
        }
    }
    

    //Now we are checking the number and writing the result
    
    resultDOM.innerHTML = `Dizideki En büyük sayı: ${bigNumber}`
}

