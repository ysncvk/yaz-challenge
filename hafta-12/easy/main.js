function calculateTime(){

    // First we take the test number from the user
    
    let speed = document.getElementById("speed").value;
    let distance= document.getElementById("distance").value;

    // Than we create the resulDOM

    let resultDOM = document.getElementById("result");

       

    //Now we are checking the number and writing the result

    const timeHour = Math.floor (distance / speed);

    const timeMinute = Math.floor (((distance/speed)-timeHour) * 60);

    if(timeMinute === 0) {
        resultDOM.innerHTML = `Toplam ${timeHour} saatde varış yaparsınız.`
    } else {
        resultDOM.innerHTML = `Toplam ${timeHour} saat ${timeMinute} dakikada varış yaparsınız.`
    }
    
}

