/************************ LES SELECTEURS JQUERY*********************************/
 
 //-- Format: $("selecteur")
 //-- En jQuery, tous les sélecteurs CSS sont disponibles.....

 $(function(){
     // DOM READY !
     function l(e) {
         console.log(e)
     }
     // -- Selectionner les balises SPAN :

     // Version JAVASCRIPT :
     l(document.getElementsByTagName("span"));

     // Version jQuery
     l($("span"));
     
     // -- Selectionner mon Menu : 

        // Version Javascript :
        l(document.getElementById("menu"));

        // Version jQuery
        l($("#menu"));

    // -- Selectionner mon Classe : 

        // Version Javascript :
        l(document.getElementsByClassName("MaClasse"));

        // Version jQuery
        l($(".MaClasse"));

     // -- Selectionner un Attribut :

        // Version jQuery
        l($("[href='https://www.google.fr']"));

 });

