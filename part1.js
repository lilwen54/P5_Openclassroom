import Generateur from "./Generateur.js";

///////////////////////////////////////// PARTIE 1 

let btn1 = document.getElementById("btn");
btn1.addEventListener("click", generer1);

function generer1() {
let generateur000 = new Generateur();
generateur000.generer1A();
}
