
/************************** LA MANIPULATION DES CONTENUS****************************   */

function l(e) {
    console.log(e)  
};

// -- Je souhaite recuperer mon lien; comment procéder ?

var google = document.getElementById("google");
l(google);

// -- Maintenant je souhaite accéder aux informations de ce lien

    //-- A Le lien vers lequel pointe la balise
    l(google.href);

    //-- B / l'ID de la balise
    l(google.id);

    // -- C : La classe de la balise
    l(google.className);

    // -- D : Le texte de la balise
    l(google.textContent);

    /*
    Maintenant je souhaite modifier le contenu de mon lien !
    comme une variable classique je vais simplement affecter une nouvelle valeur
    */

    google.textContent = "Mon lien vers Google !";


    /* ---------- AJOUTER UN ELEMENT DANS MA PAGE --------------------

     Nous allons utiliser deux methodes:
     1. La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM; que je pourrais
     par la suite modifier avec les méthodes que nous venons de voir.
     PS : Ce nouvel élément est placé en mémoire .

     */

     //-- Definition de l'élément
     var span = document.createElement("span")
     span.id= "MonSpan";

     //-- Si je souhaite lui attribuer du contenu...
     span.textContent = "Mon Beau Texte en JS !";

     // -- Comment ajouter l'élément dans la page ?
     // -- La fonction appendChild() va permettre de rajouter un enfant à un élément du DOM.
     google.appendChild(span);

     //-- Creation de la balise h1
     var h1 = document.createElement("h1");
     //-- Creation de la balise a
     var a = document.createElement("a");
     //-- titre de mon article
     a.textContent = "Titre de mon Article";

     //-- Je veux donner un lien à mon lien
     a.href = "#";

     // -- appendChild()
     
        // -- Je met mon lien (a) dans mon h1
        h1.appendChild(a);

        // je met mon h1 dans ma page dans mon body
        document.body.appendChild(h1);

       // Je veux que mon lien soit rouge
       a.style.color="red";

       // Je veux que mon lien ne soit pas souligné
       a.style.textDecoraction = "none";
    





