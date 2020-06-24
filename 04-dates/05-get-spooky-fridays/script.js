/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here


    var m = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December");


    var d = new Array(
        "Sunday ",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday ",
        "Saturday ");

    console.log(m);
    console.log(d);

    var da = new Date();
    console.log(da);

    var mois=m[da.getMonth()];
    var jour=d[da.getDay()];
    var date=da.getDate();
    var an=da.getFullYear();
console.log(mois+" "+jour+" "+date+" "+an);
console.log(jour+" "+date+" "+mois+" "+an);


})();
