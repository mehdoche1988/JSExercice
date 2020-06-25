/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

        charlesxavier.forEach(element => {
            document.getElementById("target").innerHTML +=

                `<li class="hero">
                    <h4 class="title">
                        <strong class="name">${element.name}</strong>
                        <em class="alter-ego">${element.alterEgo}</em>
                    </h4>
                    <p class="powers">${element.abilities}</p>
                </li>`
        });
    }
    document.getElementById("run").addEventListener("click", () => {

        charlesxavier();

    })

})();