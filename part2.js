import Generateur from "./Generateur.js";

//Message d'Alerte
function alerte_fenetre () {

    let alerte = { "message" : ["Vous n'avez pas cliquer sur tout les éléments nécessaires"]}
    return alert(alerte.message[0])
}

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

document.getElementById('btn2').addEventListener('click',generer2);
let y="";

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




