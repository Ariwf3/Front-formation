 /* ******************************* LA CONCATENATION***********************************  */
  
 
 var debutDePhrase          = "Ajourd'hui ";
 var laDate                 = new Date();
 var quiteDePhrase          = ", sont présents : ";
 var NombreDeStagiaires     = " " + 18;
 var FinDePhrase            = " stagiaires.<br>";

 // -- Nous souhaitons maintenant, grâce à la concaténation afficher tout ce petit monde, en un seul morceau ! 

 document.write(debutDePhrase + laDate.getDate() + "/" + (laDate.getMonth() + 1) + "/" + laDate.getFullYear() + NombreDeStagiaires + FinDePhrase);


 /*-------------------------------------------------------------

 EXERCICE CREER UNE CONCATENATION A PARIR DES ELEMENTS SUIVANTS  
 
 --------------------------------------------------------------*/   


 var phrase1 = "Je m'appelle ";
 var phrase2 = "Ari et j'ai ";
 var age     = 28;
 var phrase3 = " ans !"; 

 document.write ( phrase1 + phrase2 + age + phrase3);

