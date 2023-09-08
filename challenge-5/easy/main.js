function calculateSum(){

    
    let a = parseInt(document.getElementById("cost").value);
   
    let b =  parseInt(document.getElementById("price").value);

    let sum = 0;

    if(a && b) {
        sum = a+b;
    } else {
        sum = "Lütfen iki sayıyada giriniz"
    }
     

 
    
    let resultDOM = document.getElementById("result"); 

    
    resultDOM.innerHTML = `Sayıların Toplamı: ${sum}  `
            
          
   
 
}

