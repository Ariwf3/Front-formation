//alert("WOW, tu es sur ma page");

// deux slash pour faire un commentaire uniligne

/*
    Ici je peux faire un comm de plusieurs lignes......

    RACCOURCI CTRL + /
    OU CTRL + SHIFT + /

*/    

// -- 1. Déclarer une variable en JS
var Prenom;

// -- 2. Affecter une Valeur
Prenom = "Marie-Pierre";

// -- 3. Afficher la valeur 
console.log(Prenom);

/*------------------------------------------
|           LES TYPES DE VARIABLES          |
-------------------------------------------*/
//---- "typeof" me permet de connaître le type de ma variable 
console.log(typeof Prenom);

//-- Déclaratio, et Affectation d'une valeur à une variable 
var Age= 22;

// Afficher dans la console
console.log(Age);

// -- Vérifier le type
console.log(typeof Age);


/*------------------------------------------------------
|           LA PORTEE DES VARIABLES                     |
| Les variables déclarées directement à la              |
| racine du fichier sont appelées variables
| "Globales". 
| elles sont dispo dans l'ensemble du document
|y compris fonctions et boucles.      |
| La portée d'une var GLOBALE s'arrête au fichier
| Si je change de page les var n'existent plus
|
|Les var déclarées à l'intérieur d'une 
|fonction st appelées variables locales.
|
|Elles st dispo uniquement à l'interieur de
| celles-ci.                                    
| 
--------------------------------------------------------*/

// -- Les Variables de type FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//--- Les Booléens (VRAI FAUX

var unBooleen = false; //true
console.log(unBooleen);
console.log(typeof unBooleen);


/*------------------------------------------------------
                     - Les CONSTANTES -

 la décla CONST permet de créer une constante accessible
  uniquement en lecture....

  Sa valeur ne pourra pas être modifiée par des
  réaffectations ultérieures.

  Une constante ne peut pas être déclarée à nouveau
  Généralement par convention les constantes sont en
  MAJUSCULES.
 
--------------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// Je ne peux pas changer la valeur d'une constante

console.log("-----------------------------");


/*------------------------------------------------------
                     - LA MINUTE INFO -

 Au fur et à mesure que l'on affecte et réaffecte des 
 valeurs à une variable celle ci prend la nouvelle valeur
 et le nouveau type.

 En Javascript (ECMA Script - ES), les variables sont 
 auto-typées.

 Pour convertir une variable de type NUMBER en STRING
 et STRING en NUMBER, je peux utiliser les fonctions
 natives de javascript.
 
--------------------------------------------------------*/

var unNombre = "24"
console.log(unNombre);  
console.log(typeof unNombre);

//--  La fonction parseInt()permet de retourner un ENTIER à partir d'une chaîne de caractères(STRING)
unNombre = parseInt(unNombre);
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma valeur à ma variable
unNombre = "12.55";
console.log(typeof unNombre);

//-- La fonction parseFloat() permet de retourner un FLOAT à partir d'un STRING
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un Nombre en String avec toString()
var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString.toString());








