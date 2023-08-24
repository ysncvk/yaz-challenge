
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
    let resultArray = [];
  
    
    for (let i=0; i<array.length; i++) { 
           let counter= array.filter((item) => item===array[i]).length;
           if( counter> 1) {
               let item = document.createElement("li");
               item.innerText = `Tekrarlanan Sayı: ${array[i]} - Tekrar Sayısı: ${counter} `;
                resultDOM.appendChild(item);  
          
           }
    
    }

}


