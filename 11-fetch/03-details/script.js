/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {

    async function charlesxavier() {

        let api = await fetch("http://localhost:3000/heroes");
        charlesxavier = await api.json();
        var xmenID = document.getElementById("hero-id").value;
        console.log(xmenID); 


        // document.getElementById("target").innerHTML = 
        
        // `<li class="hero">
        //     <h4 class="title">
        //         <strong class="name">${xmen.name}</strong>
        //         <em class="alter-ego">${xmen.alterEgo}</em>
        //     </h4>
        //     <p class="powers">${xmen.abilities}</p>
        // </li>`


    }
    document.getElementById("run").addEventListener("click", () => {

        charlesxavier()

    })

})();