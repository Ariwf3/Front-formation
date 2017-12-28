

/*       ------------------------------LE DOM-------------------------------------------    

Le DOM est une interface de développement en JS pour HTML. Grâce au DOM, je vais être en mesure d'accéder/ modifier mon HTML.

L'Objet "document" c'est lep oint d'entrée vers mon contenu HTML !

Chaque page chargé dans mon navigateur à un objet "document"

Comment puis je faire pour recup les differentes infos de ma page HTML ?   


                        -----document.getElementById -------

         document.getElementsById() : C'est une fonction qui va permettre de recup un elt HTML à partir de son identifiant unique: ID       

*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

//                              -----document.getElementClassName -------
/*              
            document.getElementsById() : C'est une fonction qui va permettre de recup
            un ou plusieurs éléments (une liste) HTML à partir de leur classe            */

 var contenu = document.getElementsByClassName("contenu");   
 console.log(contenu);   
 
 // -- Me renvoie un tableau JS avec mes éléments HTML ou encore autrement dit, une "Collection d'éléments HTML."

 //                             -----document.getElementByTagName -------

            /* document.getElementByTagName() : C'est une fonction qui va permettre de recup
             un ou plusieurs eléments (une liste) HTML à partir de leur * nom de balise*   */

var span = document.getElementsByTagName("span");
console.log(span);             

