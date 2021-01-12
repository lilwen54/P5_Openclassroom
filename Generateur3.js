import Citation from './Citation.js'; //Importation de la class Citation

export default 

class Generateur{constructor(procedure, newCitation){ 
    //Dans le constructeur c pas seulement des element que je vais recuperer en parametre
    //Ca peut etre des chose qui doivent etre codé dans toute les methodes
    //Ex: this.conteneur2AB = document.getElementbyID("Conteneur2AB")
    //METTRE LES document.getElementbyID("") dans le constructeur, pour quelle soit connus de tout
   
    //Ensuite il s'agira d'utiliser la variable pour le faire dans les methodes
    // Je creer une variable pour le conteneur 1AB
    //Une autre variable pour le conteneur 2AB
    this._newCitation = newCitation //==> doit stocké le getElements devra etre reutilisé dans les methode car il sera connu partout;}
//METHODES avec Fonction + This.
//C'est ici que je dois verifier si sa correspond a generateur 1 ou 2
x(){
    //ICI GENERER LES NEW CITATIONS QUI PASSERONT EN PARAMETRE DE LA CLASS GENERATEUR
    let phrase = newCitation.createCitation(); 
}


}