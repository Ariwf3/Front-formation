/* ************************LES CONDITIONS *********************** */


var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR) {
    alert("Bienvenue !");
//ELSE non obligatoire
}else{
    alert("Sors d'ici");
};

/* exo
creer une fonction verfiant lage de l'utilisateur
s'il a la maj legale alors je lui souhaite bienvenue
sinon je le redirige vers google apres avoir signalé le soucis

*/

var maj= 18;

function majorite(age) {
    age = prompt("quel age as tu?");
    if (age >= maj) {
        alert("bienvenue");
    } else{
        alert("Tu n'as pas l'age coquin" );
        document.location.href="http://google.com ";
    }
};

majorite();

//CORRECTION

// --1.    Déclarer la majorité légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction por demander son age.
// Si l'age de l'utilisateur passé en parametre en superieur ou egal à la maj légale, alors la fonction retourne vrai
// Sinon elle retourne faux
//@param {int} age
//@return {boolean}

function verifierAge(age) {
    if(age >= MajoriteLegaleFR){
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var age =parseInt(prompt("Bonjour, Quel âge avez vous ?", "<Saisissez votre Age>"));

// --4. Verification dde l'Age de l'utilisateur

if(verifierAge(age)) {
    // -- 4a. J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet réservé pour les majeurs");

} else {
    document.location.href = "http://google.com";

    }


    /* ******************LES OPERATEURS DE COMPARAISON***************************** 
    
    L'opérateur de comparaison "==" signifie : Egal à 
    Il permet de vérifier que 2 variables sont identiques.

    L'opérateur de comparaison " === " signifie "strictement Egal à." Il va comparer la valeur et le type de données.

    L'opérateur de comparaison " != " signifie "différent de "

    L'opérateur de comparaison " !== " signifie "strictement différent de"


    */

    /*
    EXERCICE jarrive sur un espace securise email et mdp
             je dois saisir mon email et mon mdp pour etre authentifié
             En cas d'echec une alerte m'informe
             si tout se passe bien jai un message d'accueil.

    */
    
    var email, mdp;

    email= "wf3@h1-media.fr";
    mdp = "wf3";
   // CORRECTION 
   
   // --1. Demander a l'utilisateur son email
   var emailUser = prompt("Bonjour, Quel est votre email?", "<Saisissez votre email>");
   
   //-- 2. Je verifie si l'email saisi (emailUser) correspond à celui en BBD (email)
     if(emailUser == email) {
       //2a. Tout est ok, je continue la verif avec le mot de passe.
       //2a1 Je demande à l'utilisateur son mot de passe
       var mdpUser = prompt("votre mot de passe?","<Saisissez votre Mot de Passe>");
       //2a2 Verif du mdp 
       if(mdpUser === mdp) {
           alert("Bienvenue !");
       }
     } else {
            //2b. Les emails ne correspondent pas...
            alert("ATTENTION, nous n'avaons pas reconnu votre adresse mail");
   }
   


//---- EXEMPLE AVEC LES FONCTIONS  



function monUtilisateurEstCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    }else{
        return false;
    }
 }

 var mdpUser = prompt("votre mot de passe?","<Saisissez votre Mot de Passe>");
 var emailUser = prompt("Bonjour, Quel est votre email?", "<Saisissez votre email>");

 if (monUtilisateurEstCorrect(emailUser, mdpUser)){
     
    alert("Bienvenue " + emailUser) ; 
 } else{
     alert("ATTENTION, email/mot de passe incorrect.");
 }

/* ******************LES OPERATEURS LOGIQUES*
**************************** 

                ####### L'opérateur ET: && ou AND  ########

Si la combinaison emailUser et email correspond ET la combinaison mdpUser et mdp correspond.

--> Dans cette condition les deux doivent obligatoirement correspondre pour être validées
Ex: if(emailUser && mdpUser == mdp) {...}


                "####### L'opérateur OU: || ou OR  ##########

 Si la combinaison  emailUser et email correspond ET/OU la combinaison mdpUser et mdp correspond.
 
 --> Dans cette condition au moins une des deux doit correspondre pour être validée.
 Ex: if(emailUser == email || mdpUser == mdp) {...}


                "####### L'opérateur "!" ou NOT  ##########

 L'Opérateur "!" signifie le CONTRAIRE DE..... ou NOT
 
 var monUtilisateurEstApprouve = true;
 if(!monUtilisateurEstApprouve) {...} : Mon utilisateur n'est pas approuvé.

 Reviens à écrire : 
 if(monUtilisateurEstApprouve == false) {...}
 










