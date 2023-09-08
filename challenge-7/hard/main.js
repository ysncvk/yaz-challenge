function findMostLetter(){

    // First we take the string from user
    let stringTaken  = document.getElementById("string").value;
    

    // Than we split the string
    const stringArray = stringTaken.split("");
    console.log(stringArray)
    let result= 0;
   
    //Now we are counting each character

    const vowels = "aeıioöuü"

    for(let i = 0;  i < stringArray.length; i++) {
        const letter = stringArray[i].toLowerCase();
        if(vowels.includes(letter)) {
            result = result +1
        }
    }

    // We are writing the result in html document
    let resultDOM = document.getElementById("result");

    resultDOM.className = ""

    if (!stringTaken) {
        resultDOM.innerHTML = "Lütfen önce metni giriniz"
    } else {
        
        resultDOM.innerHTML = `${result} adet sesli harf bulunmaktadır.` 
    }
}

