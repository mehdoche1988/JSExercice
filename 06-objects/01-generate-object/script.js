/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



    /* 
 
         myself.lastname: 'Semlali',
         myself.firstname: 'Mehdi',
         myself.age: 32,
         myself.city: 'Liege',
         myself.country: 'Belgium',
 
 
     */
    var myself = new Object();
    myself.lastname = 'Semlali',
        myself.firstname = 'Mehdi',
        myself.age = 32,
        myself.city = 'Liege',
        myself.country = 'Belgium',
        console.log("Hello my name is " + myself.lastname +
            " "+myself.firstname+
            " I am "+myself.age+
            " I am living "+myself.city+
            " on "+myself.country);


})();
