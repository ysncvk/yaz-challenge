function makeSum () {
  
    let number = parseInt(document.getElementById("numberid").value);
    let resultDOM = document.getElementById("result");
    let temporaryNumber = number;

    // once basamak sayısını bulalım
    let basNum = 0;

    while (temporaryNumber !== 0) {
        temporaryNumber = Math.floor(temporaryNumber / 10);
        basNum = basNum + 1;
    }
    // sayıyı basamaklarına ayırıp bir diziye ekleyelim
    let numbers = [];
    
    for(let i=0; i<basNum; i++)  {
         numbers[i] = Math.floor((number / Math.pow(10,(i))))  % 10
         console.log(numbers[i])
    }
    
    // sayıların basamaksayısı üssünü alıp toplayalım
    totalNum = 0;
    for (let i=0; i<numbers.length; i++) {
        totalNum = totalNum + numbers[i];
        console.log(totalNum)
        
    } 

    //kontrolümüzü yapıp sonucu ekrana yazdıralım   
    
 
    resultDOM.innerHTML = `Basamakların Toplamı: ${totalNum} `
  
}