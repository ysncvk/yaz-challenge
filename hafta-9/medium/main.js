
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
    let totalEven = 0;

    // calculating the sum of the evens in the array
    for (let i=0; i<array.length; i++) {
        if(array[i]%2 === 0) {
            totalEven= totalEven + array[i]
        }
        
    }
        
    resultDOM.innerHTML = ` Çift sayıların toplamı: ${totalEven}`
}

