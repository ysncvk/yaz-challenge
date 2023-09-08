function factorial (number) {

    let faktoriyel = 1;

    for(let i = 1; i <= number; i++){
        faktoriyel = faktoriyel * i;
    }

    return faktoriyel

}


function calculateSum(){

    
    let t = parseInt(document.getElementById("total").value);
   
    let g =  parseInt(document.getElementById("group").value);

    let c = Math.round(factorial(t)/ (factorial( t-g)* factorial(g)));


    
    let resultDOM = document.getElementById("result"); 

    
    resultDOM.innerHTML = `${c} farklı şekilde seçilir `
            
          
   
 
}
