import Citation from './Citation.js'; //Importation de la class Citation

export default 

class Generateur{constructor(click){
this.click = click;
//Creer une methode event
}
generer1A () {

    let citationA = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
    let phrase = citationA.createCitation();
    document.getElementById("conteneur1").innerHTML = phrase;
}

generer2A () {
    let div = document.createElement("div");                                            //creer une div
    let para = document.createElement("p");                                             //creer un paragraphe 
    document.getElementById("conteneur2AB").appendChild(div)                             //Met la div dans le conteneur1
    div.appendChild(para).style.color = 'blue' ;  
    let citationA = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
    let phrase = citationA.createCitation();                                             //IMPORTANT POUR GARDER L'ALEA             
    para.innerHTML = phrase;
};
generer2B () {
    
    let div = document.createElement("div");                                        //creer une div
    let para = document.createElement("p");                                         //creer un paragraphe 
    document.getElementById("conteneur2AB").appendChild(div)                         //Met la div dans le conteneur1
    div.appendChild(para).style.color = 'red' ;
    let citationB = new Citation(morceau.animal, morceau.caracteristique, morceau.adjectif);
    let phrase = citationB.createCitation();                                             //IMPORTANT POUR GARDER L'ALEA             
    para.innerHTML = phrase;
};

}