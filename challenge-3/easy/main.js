function calculateSum(){

    
    let a = parseInt(document.getElementById("cost").value);
   
    let b =  parseInt(document.getElementById("price").value);

    let sum = 0;

    if(a && b) {
        sum = a*3 + b*2;
    } else {
        sum = "Lütfen iki sayıyada giriniz"
    }
     

 
    
    let resultDOM = document.getElementById("result"); 

    
    resultDOM.innerHTML = `Skor ${sum}  `
            
          
   
 
}

