/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function addNewMutants() {
        let api = await fetch("http://localhost:3000/heroes");
        let xmen = await api.json();
        let xmenNewPower = document.getElementById("hero-powers").value;


        let newMutants = {
            id: xmen.length + 1,
            name: document.getElementById("hero-name").value,
            alterEgo: document.getElementById("hero-alter-ego").value,
            abilities: xmenNewPower.split(",")
        }

        xmen.push(newMutants);
        console.table(xmen);
    }
    document.getElementById("run").addEventListener("click", () => {
        addNewMutants();
    })
})();