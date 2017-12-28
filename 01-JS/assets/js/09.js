/*--------------------------- LES BOUCLES ---------------------------------- */

// -- la boucle FOR

//-- Pour i = 1; tant que i <= strictement inferieur ou egal a 10; alors j'incremente i de 1.
for(let i = 1; i <= 10; i++) {
    document.write("<p>Instruction exécutée : <strong>" + i + "</strong></p>");
};

document.write("<hr>");

var j = 1;
while(j <= 10) {
    document.write("<p>Instruction exécutée : <strong>" + j + "</strong></p>");
    j++;
};

/*          EXERCICE
Supposons le tableau suivant :
*/


var Prenoms = ["Jean", "Marc", "Mathhieu", "Luc", "Pierre", "Paul","Hugo"];

for(let i= 0; i < 7; i++) {
    console.log(Prenoms[i]);
}

console.log("----------------------------")

for(let i = 0; i < Prenoms.length ;i++) {
    console.log(Prenoms[i]);    
};

console.log("----------------------------")

var j = 0;
while(j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++;
}

console.log("----------------------------")

// même exo avec la boucle ForEach
// Attention a la PERFORMANCE

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice) {
    console.log(prenom);
}

// https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
// https://leftshift.io/4-javascript-optimisations-you-should-know


