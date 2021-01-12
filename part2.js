// ICI Il faut que les tableau (bn je l'ai ai mis dans dat ^^), et les instanciations de generateur et citation

import Generateur from "./Generateur.js";



function generer2 () {

    document.getElementById("conteneur2AB").innerHTML = "";  // Remise à 0 
    let z;

    if (y==1){for (z=0; z<x; z++)
        {                 
            let generateur00 = new Generateur();
            generateur00.generer2A(); 
        }}

    else if (y==2){for (z=0; z<x; z++)
        {                      
            let generateur01 = new Generateur(); 
            generateur01.generer2B(); 
        }}

    else 
        {
         alerte_fenetre()                                                               //"Vous n'avez pas cliquer sur tout les éléments nécessaires"
        }
}




