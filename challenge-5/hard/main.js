function makeSum () {
  
    let number = parseInt(document.getElementById("numberid").value);
    let resultDOM = document.getElementById("result");

    
     //kontrolümüzü yapıp sonucu ekrana yazdıralım   
    if (Number.isInteger(Math.sqrt(number))) {
        resultDOM.innerHTML = `Karekökten Çıkar `
    } else {
        resultDOM.innerHTML = `Karekökten Çıkmaz `
    }
}