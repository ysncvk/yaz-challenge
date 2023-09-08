function calculateSum(){

    
    let kitap = parseInt(document.getElementById("kitap").value);
    let defter = parseInt(document.getElementById("defter").value);
    let kalem = parseInt(document.getElementById("kalem").value);
   
   
    let sum = 80*kitap + 20*defter + 5*kalem;

    
    let resultDOM = document.getElementById("result"); 

    
    resultDOM.innerHTML = `Toplam Hesap: ${sum}  `
            
          
   
 
}

