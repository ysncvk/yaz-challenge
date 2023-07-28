function calculateProfit(){

    
    let cost = document.getElementById("cost").value;
   
    let price =  document.getElementById("price").value;

    let profit = 0;

    let i = 0;
    
    let resultDOM = document.getElementById("result"); 

    if (cost>=price) {
        resultDOM.innerHTML = "Maliyet fiyata eşit veya yüksek olamaz"
    } else {
        for (i=1; i<=price; i++) {
            profit = i * (price-cost);

            console.log(profit)

            if (profit > cost ) {
                resultDOM.innerHTML = `${i} ürün sattığınız takdirde kar edersiniz `
                break;
            }  
        }   

    }
   
 
}

