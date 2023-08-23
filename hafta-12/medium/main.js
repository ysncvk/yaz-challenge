function toUpperCaseString(){

    // First we take the texxt number from the user
    
    const animal = parseInt(document.getElementById("animal").value);
  
   
    const leg = parseInt(document.getElementById("leg").value);
    

    let c, s = 0;  // c for the chicken number and s for the ship number

    //calculating the number of sheep and chicken

    c = (5*animal - (animal+leg)) / 2;

    s = animal - c;

    // Than we create the resultDOM
    let resultDOM = document.getElementById("result");

      // Than we write  the results on screen
    resultDOM.innerHTML = `Tavuk sayısı: ${c} Koyun Sayısı: ${s}`
 
}

