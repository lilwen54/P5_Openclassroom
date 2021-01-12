import Generateur from "./Generateur.js";
import Citation from "./Citation.js";

///////////////////////////////////////// PARTIE 1 

let citation1 = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);

//INSTANCIATION
let gen = new Generateur(citation1);
conteneur2AB.innerHTML = gen.generer1A.phrase

