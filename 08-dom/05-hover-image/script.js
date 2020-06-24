/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    let kiss = document.querySelector('figure img').getAttribute('data-hover');
    let heart = document.querySelector('figure img').getAttribute('src');

 
    
    document.querySelector('figure img').setAttribute("onmouseover", `this.src='${kiss}'`);
    document.querySelector('figure img').setAttribute("onmouseout", `this.src='${heart}'`);

})();
