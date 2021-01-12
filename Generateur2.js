import Citation from './Citation.js'; //Importation de la class Citation

export default 

class Generateur{constructor(generateur1){
//this._newCitation = newCitation;
this.generateur1 = generateur1
//Creer une methode event
}
generer1A () {

    let citationA = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
    //let phrase = citationA.createCitation();
    this.conteneur1 = document.getElementById("conteneur1").innerHTML = phrase;
}
//Doit etre une methode
generer2A () {

    //let phrase = gen1.createcitation()
    let div = document.createElement("div");                                            //creer une div
    let para = document.createElement("p");                                             //creer un paragraphe 
    document.getElementById("conteneur2AB").appendChild(div)                             //Met la div dans le conteneur1
    div.appendChild(para).style.color = 'blue' ;  
    let citationA = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
    let phrase = citationA.createCitation();                                             //IMPORTANT POUR GARDER L'ALEA             
    para.innerHTML = phrase;
};
//Doit etre une methode
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