function ageCalculate(){

    // First we take the birthday of the user
    let birthdayDate = new Date();
    birthdayDate = document.getElementById("birthday").value;
    let birthdayDateSplit = birthdayDate.split("-");
    let birthdayYear = birthdayDateSplit[0];
    let birthdayMonth = birthdayDateSplit[1];
    let birthdayDay = birthdayDateSplit[2];

    // Than we take the time of now
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth();
    let nowDay = nowDate.getDate();
    console.log(nowDay)
    console.log(birthdayDay)


    //Now we are calculating the age

    let age = nowYear - birthdayYear;

    if (birthdayMonth-1 > nowMonth) {
        age = age -1;
    } else  if (birthdayMonth-1 == nowMonth) {
        if(birthdayDay > nowDay) {
        age = age-1;
        }   
    }

    // We are writing the age in html document
    let resultDOM = document.getElementById("result");

    resultDOM.className = ""

    if (!birthdayDate) {
        resultDOM.innerHTML = "Lütfen önce Doğum Tarihinizi girin"
    } else {
        if(age < 0) {
        resultDOM.innerHTML = `Yaşınız "${age}" olamaz. Doğum tarihinizi düzeltin`  
        resultDOM.className = "text-danger-emphasis bg-primary-white border border-primary-subtle rounded-3" 
        } else
        resultDOM.innerHTML = `Yaşınız: ${age}` 
    }
}

