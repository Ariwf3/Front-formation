/********************************* LES FONCTIONS ***********************************/



// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    //-- Lors de l'appel de cette fonction, les isnstructions ci dessous sont exécutées
    alert("Bonjour");
}

/* Je vais appeler ma fonction "ditBonjour"  et déclencher ses instructions  */
ditBonjour();

// -- Déclarer une fonction qui prend une variable en paramètre
function Bonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong>!</p>");
}

// -- Appeler/ Utiliser une fonction avec des paramètres
Bonjour("Aristide","BASSOLE");

/* 
EXERCICE :
Crer une fonction permettant d'effectuer l'addition de deux nombres passés en paramètres
*/
function addition(nombre1, nombre2) {
     console.log(nombre1 + nombre2)
}
addition(1,2);

//CORRECTION  
function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "<p>");
