
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
    let totalArray = 0;
    for (let i=0; i<array.length; i++) {
        totalArray = totalArray + array[i]
    }
    
    let result = totalArray/array.length;

    //Now we are checking the number and writing the result


    
    resultDOM.innerHTML = ` ${result}`
}

