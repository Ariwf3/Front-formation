// -- Déclarer un tableau indexé
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

// -- Afficher le contenu de mon tableau
console.log(monTableau[1]); // Hugo
console.log(monTableau[2]); // Hamid
console.log(monTableau[0]); // Marie
console.log (monTableau); // Afficher toutes les données du tableau

// -- Déclarer ou affecter des valeurs à un tableau indexé
var NosPrenoms = ["Thomas","Olivier","Marie-Pierre","Chloé","Riad","Hugo"];
console.log(NosPrenoms);

// -- Déclarer et affecter des valeurs à un Objet
// PAS DE TABLEAU ASSOCIATIF EN JS !!!!!!!!!

var Coordonnees = {
    prenom : "Hugo",
    nom    : "LIEGARD",
    age    : 28
};

console.log(Coordonnees);
console.log(typeof Coordonnees);

// -- Je vais créer deux tableaux indexés
var listeDePrenoms = ["Hugo","Marie-Pierre","Lounis","Romain"];
var listeDeNoms = ["LIEGARD", "DUPOUX", "DGADEN", "ELIE"];

// -- Je vais crer un tableau à deux dimensions à partir de mes deux tab prcédents.

var Annuaire = [ listeDePrenoms, listeDeNoms];
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// CORRECTION

var Annuaire = [
    { prenom: "Hugo", nom: "LIEGARD", tel: "05155454545"},
    { prenom: "CHLOE", nom: "THUILLIER", tel: "05155454545"},
    { prenom: "Anis", nom: "CHABANI", tel: "05155454545"}
];

console.log(Annuaire);
console.log(Annuaire[1]);
console.log(Annuaire[1]["prenom"]);
console.log(Annuaire[1].prenom);

// Exemple de taleau 3D

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts);
console.log(Contacts[1].coordonnees.adresse.region);


// ------------------AJOUTER UN ELEMENT DANS TABLEAU ------------------------------------------------

var Couleurs = [ "Rouge", "Jaune", "Vert" ];

/*
Si je souhaite ajouter un élément je fais appel à la fonction push 
qui me renvoie le nombre d'éléments de mon tableau que je peux recup facultativement dans une variable 
*/

console.log(Couleurs);
var nombreElementsdeMonTableau = Couleurs.push("Orange")
console.log(Couleurs);
console.log(nombreElementsdeMonTableau);

// NB: La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.




/* ------------------- RECUP ET SORTIR LE DERNIER ELEMENT  --------------------------------*/

/* 
La fonction pop() me permet de supprimer le dernier element de mon tableau et d'en recup la valeur.

La même chose est possible avec le premier élément e utilisant la fonction shift()

NB : La fonction splice() permet de faire sortir un ou plusieurs éléments de notre tableau
*/


var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);







