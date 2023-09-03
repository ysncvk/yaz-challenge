function ofTheSquare () {
    console.log("hatamı var")
    let number = document.getElementById("numberid").value;
    let resultDOM = document.getElementById("result");
    let result = number*number;
    resultDOM.innerHTML = `${number} sayısının karesi: ${result} ` ;
    console.log("hatamı var")
   
}