function isOddOrEven () {
    let number = document.getElementById("numberid").value;
    let resultDOM = document.getElementById("result");
    if (number % 2 === 0 ) {
        resultDOM.innerHTML = `${number} çift sayıdır.` ;
    } else {
        resultDOM.innerHTML = `${number} tek sayıdır.` ;
    }
}