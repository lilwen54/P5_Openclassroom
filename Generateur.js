import Citation from './Citation.js'; //Importation de la class Citation

export default 

class Generateur{
    constructor(newCitation){ 
        this._newCitation = newCitation; //extands
    
    
        //FIN DU CONSTRUCTOR 
    }

    getElements(){
        //PART 1
            let btn1 = document.getElementById("btn");
            generateur = new Generateur();
            btn1.addEventListener("click", generateur.generer1A());
        //PART 2
            document.getElementById("A").onclick = function yA() {y=1; console.log("y=" +y)};
            document.getElementById("B").onclick = function yB() {y=2; console.log("y=" +y)};
            document.getElementById("choixA").onclick = function yA() {y=1; console.log("y=" +y)};
            document.getElementById("choixB").onclick = function yB() {y=2; console.log("y=" +y)};
            
            let x;
            x = document.querySelector('.chiffre').value ;
            
            document.getElementById('chiffre1').onclick = function chiffre1() {x=1; console.log("x=" +x)};
            document.getElementById('chiffre2').onclick = function chiffre2() {x=2; console.log("x=" +x)};
            document.getElementById('chiffre3').onclick = function chiffre3() {x=3; console.log("x=" +x)};
            document.getElementById('chiffre4').onclick = function chiffre4() {x=4; console.log("x=" +x)};
            document.getElementById('chiffre5').onclick = function chiffre5() {x=5; console.log("x=" +x)};
            //document.getElementById('btn2').addEventListener('click',generer2);
            let y="";
            conteneur2AB = document.getElementById("conteneur2AB");}
//METHODES avec Fonction + This.
generer1A (){
    phrase:{this.citation1.createCitation();}
}

get generer2A (){
    let phrase = this.citation2A.createcitation();
}

get generer2B (){
    let phrase = this.citation2B.createcitation();
}
citation1 = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
citation2A = new Citation(morceau.salutation, morceau.sujet, morceau.phrase);
citation2B = new Citation(morceau2.animal, morceau2.caracteristique, morceau2.adjectif);
}

