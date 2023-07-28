function findMostLetter(){

    // First we take the string from user
    let stringTaken = birthdayDate = document.getElementById("string").value;
    

    // Than we split the string
    const stringArray = stringTaken.split("");
    const charMap = {};
    let maxCount = 0;
    let maxLetter = '';

    console.log(charMap)
   
    //Now we are counting each character

    for(let i = 0;  i < stringArray.length; i++) {
        const letter = stringArray[i].toLowerCase();
        if(letter !== ' ') {
            charMap[letter] = charMap[letter] + 1 || 1;
            console.log(charMap)
            if(charMap[letter] > maxCount) {
                maxCount = charMap[letter];
                maxLetter = letter;
            }
        }
    }

    // We are writing the result in html document
    let resultDOM = document.getElementById("result");

    resultDOM.className = ""

    if (!stringTaken) {
        resultDOM.innerHTML = "Lütfen önce metni giriniz"
    } else {
        
        resultDOM.innerHTML = `En çok bulunan harf: ${maxLetter} <br> Sayısı: ${maxCount}` 
    }
}

