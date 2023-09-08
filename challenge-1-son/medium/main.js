function calculateSum(){

    
    let a = parseInt(document.getElementById("cost").value);
   
    

    let sum = Math.round(a/12);

    
    let resultDOM = document.getElementById("result"); 

    
    resultDOM.innerHTML = `ayda ${sum}   kitap okumalıdır ki yılda ${a} kitap okumuş olsun`
            
          
   
 
}

