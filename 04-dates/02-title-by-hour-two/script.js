/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    /*
    
        let hour = new Date().getHours();// ne pas prendre separrer
        let min = new Date().getMinutes();// ne pas prendre separrer
        let test = new Date().getTime();
        console.log(test);
        console.log(hour + ":" + min);
    
        var write;
        if (hour < 17 && min < 29) {// c 'est 2 condition. les 2 doivent etre ok
            write = "Good evening";
        } else {
            write = "Hello";
        }
    
        document.getElementById("target").innerHTML = write*/



    var d = new Date();
    var date = d.getHours() + ':' + (d.getMinutes());
    console.log(date);


    var write;
    if (date <   "17:30") {
        write = "Good evening";
    } else {
        write = "Hello";
    } document.getElementById("target").innerHTML = write

})();
