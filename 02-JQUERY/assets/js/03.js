/************************* LE CHAINAGE AVEC JQUERY *****************************/

$(function() {
    // JE souhaite cacher tous mes DIV de page HTML
    console.log($("div"));

    $("div").hide("slow", function(){
        // -- une fois que la methode hide( est terminée,mon alerte peut s'exécuter.)
        alert("fin du hide");
        // NOTA BENE : La fonction s'exécutera pour l'ensemble des elements du selecteur

        $("div").css("background","yellow");
        $("div").css("color","red");

        // -- Je fais reapparaitre mes DIV
        $("div").show("slow");


    });  // FIN FONCTION ANONYME

    //exemple chainage de methode

    $("p").hide(1000).css("color","blue").css("font-size","20px").delay(2000).show(500);

    $("p").hide(1000).css({"color":"green","font-size":"20px"}).delay(2000).show(500);



});


 
 