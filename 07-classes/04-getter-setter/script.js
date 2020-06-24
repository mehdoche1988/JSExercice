/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    class Person {
        constructor(firstname, lastname) {

            this.firstname = firstname;
            this.lastname = lastname;
        }

        getFirstname() {

            return this.firstname;
        }

        getLastname() {

            return this.lastname;
        }

        setFirstname(newFirstname) {

            return this.firstname=newFirstname;// sert a changer le firstname
        }

        setLastname(newLastname) {

            return this.lastname=newLastname;
        }

    }


    var mehdi=new Person('mehdi','semlali');// creation nouvel objet

    var lara=new Person('lara','trabelsi')

   // mehdi.getFirstname+" "+mehdi.getLastname
    console.log(mehdi.getFirstname()+" "+mehdi.getLastname())

mehdi.setFirstname("Mehdi");//change la variable Firstname

mehdi.setLastname("Semlali");

console.log(mehdi.getFirstname()+" "+mehdi.getLastname())
console.log(lara.getFirstname()+" "+lara.getLastname())


})();
