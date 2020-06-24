/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    //console.log(fruits);

    /* var del = fruits.splice(1,8);
     console.log(del);
     del[0]="banana";
 
     del[del.length]="kiwi";
     console.log(del);*/

    //push shift unshift






    document.getElementById("run").addEventListener("click", function () {



        console.log(fruits);

        fruits.shift(fruits[0] && fruits.pop());
        console.log(fruits);

        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);
    });






})();
