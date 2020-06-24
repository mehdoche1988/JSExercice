/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    var d = document.getElementById("dob-day");
    var m = document.getElementById("dob-month");
    var y = document.getElementById("dob-year");
    var birthdate = (d.options[d.selectedIndex].value) +
        "/" + (m.options[m.selectedIndex].value) +
        "/" + (y.options[y.selectedIndex].value);

    console.log(birthdate);

    var today = new Date();
    var date = (today.getDate()) +
        '/' + (today.getMonth()) +
        '/' + (today.getFullYear());
    console.log(date);

})();

