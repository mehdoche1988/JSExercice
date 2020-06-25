/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    async function deleteNewMutants() {
        let api = await fetch("http://localhost:3000/heroes");
        let xmen = await api.json();
    }
    document.getElementById("run").addEventListener("click", () => {
        deleteNewMutants();
    })
})();