/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

  // to get the value of an input: document.getElementById("element-id").value
  var ordre = document.getElementById("numbers").value;
  var res = ordre.split(" ");
  console.log(ordre);
  console.log(res);


  document.getElementById("run").addEventListener("click", function () {
    /*
        res.sort(function (a, b) {
          if (a.res < b.res) { return -1; }
          if (a.res > b.res) { return 1; }
          return 0;
        })
        alert(res.sort);
    
        document.getElementById("response").innerHTML = res;*/

    const array1 = res;
    array1.sort();
    console.log(array1);
    //document.getElementById("response").innerHTML = res;

  });

})();
