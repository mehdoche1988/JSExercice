/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        /* for (var i = 0; i < 22; i++) {
             console.log(i);
             console.log(Math.pow(i, 2));
             var carre = (Math.pow(i, 2));
 
             document.getElementById("response").innerHTML = "The squere of  " + i + " is " + Math.pow(i, 2);
         }*/


        for (let i = 0; i < 22; i++) {
            console.log(i);
            console.log(Math.pow(i, 2));
            var newSquare = i * i
           // var p = document.createElement('p')
            //p.textContent = newSquare
            //document.getElementById('response').appendChild(p)
        }

    });

})();
