function calculatePool() {

    // define the variables 
    let firstValve = document.getElementById("firstValve").value;

    let secondValve = document.getElementById("secondValve").value;

    let escapeValve = document.getElementById("escapeValve").value;

    let result = 0;

    let resultDOM = document.getElementById("result");

    // calculate the result

     result = 1/(((1 / firstValve) + (1 / secondValve)) - 1 / escapeValve);

     console.log(result)

     resultHour = Math.floor(result);

     resultMinute = Math.floor(((result-resultHour) * 60));

     resultSecond = Math.floor((((result-resultHour) * 60) - resultMinute)*100);
     // print the result

     if (result<0){
        resultDOM.innerHTML = `Bu degerlerle havuzu dolduramazsın `;
     } else if(result) {
        resultDOM.innerHTML = `${resultHour} saat ${resultMinute} dakikada  ${resultSecond} saniyede havuzu doldurabilirsin `;
     } else  {
        resultDOM.innerHTML = `Lütfen değerleri eksiksiz girin `;
     }

}
