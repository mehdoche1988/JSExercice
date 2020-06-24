/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

 
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    var found = [
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
     
    ];



    document.getElementById("n-1").innerHTML = found[0];
    document.getElementById("n-2").innerHTML = found[1];
    document.getElementById("n-3").innerHTML = found[2];
    document.getElementById("n-4").innerHTML = found[3];
    document.getElementById("n-5").innerHTML = found[4];
    document.getElementById("n-6").innerHTML = found[5];
    document.getElementById("n-7").innerHTML = found[6];
    document.getElementById("n-8").innerHTML = found[7];
    document.getElementById("n-9").innerHTML = found[8];
    document.getElementById("n-10").innerHTML = found[9];


    var ResMin = (Math.min(...found));
    console.log("le min est " + ResMin);
    document.getElementById("min").innerHTML =ResMin;

    var ResMax = (Math.max(...found));
    console.log("le min est " + ResMax);
    document.getElementById("max").innerHTML =ResMax;


    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum =found.reduce(reducer);
    console.log(sum);
    document.getElementById("sum").innerHTML =sum;

    var avg=sum/10;
    console.log(avg);
    document.getElementById("average").innerHTML =avg;



})();


