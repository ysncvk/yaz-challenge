
let array = [];
function addArray () {
   
    let item = parseInt(document.getElementById("number").value);
    array.push(item)
    let arrayDOM = document.getElementById("array");
    arrayDOM.innerHTML = array;
    document.getElementById("number").value =''
    
    
}



function medyanArray(){
    //first we sort the array
    sortedArray = array.sort(function(a, b){return a - b});
    console.log(sortedArray)
    // We create the resulDOM

    let resultDOM = document.getElementById("result");
    let medyan = 0;

    // calculating the sum of the evens in the array
    if (sortedArray.length % 2 === 1) {
        medyan = sortedArray[(sortedArray.length - 1)/2];
    } else {
        medyan = (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) /2
    }
        
    resultDOM.innerHTML = ` Medyan: ${medyan}`
}


