/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var tab_day = new Array(
        "Sunday ",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday ",
        "Saturday ");
    var tab_month = new Array(
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

    var d = new Date();

    var dater = (
        (tab_day[d.getDay()]) + " " +
        (d.getDate()) + " " +
        (tab_month[d.getMonth()]) + " " +
        (d.getFullYear() + ",") + " " +
        (d.getHours() + "h") +
        ((d.getMinutes() < 10 ? '0' : '') + d.getMinutes())
    );


    // console.log(dater);
    //console.log( (d.getMinutes()<10?'0':'') + d.getMinutes() );

    document.getElementById("target").innerHTML = dater;


})();
