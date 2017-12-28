/*
Votre mission: 
Realiser une fonction permettant à un internaute de :
    - Saisir son prenom dans un prompt
    - Retourner à l'utilisisateur : Bonjour [PRENOM], quel age a tu?
    - Saisir son age
    - Retourner a l'utilisateur: Tu es né en [annee de naisance]
    - Afficher un recap de la page

    bonjour [PRENOM], tu as [AGE]
*/ 
var dateObj = new Date();
var année = dateObj.getFullYear();

    function presentation(Prenom, Age) {
        
        Prenom = prompt("Saisis ton doux prénom");
        alert ("Bonjour  " + Prenom + " quel âge as tu? ");
        Age = prompt("saisis ton age? ");
        alert ("Tu es né en " + (année - Age));
        return "bonjour " + Prenom + " tu as " + Age + " ans";

        
        
    }

    document.write (presentation("Prenom","Age"));


    // CORRECTION
    // 1. Initialisation des variables
    var dateObj       = new Date();
    var anneeActuelle = dateObj.getFullYear();

    // 2. Creation d'une fonction
    function Hello() {


        // 2a. je demande à l'utilisateur son prénom
        let prenom = prompt("Hello ! What is your name ?","<Saisir votre prénom>");
        console.log(prenom);

        // 2b. Je lui demande son age
        let age=parseInt(prompt("Hello " + prenom + " ! Quel age as tu?","<Saisir votre âge>" ));
        console.log(age);
        console.log(typeof age);
        // 2c.  Déduire l'année de naissance, et l'afficher dans une "Alert".
        alert("AMAZING! so you born in " + (anneeActuelle - age) + "!");

        // 2d. J'affiche tout ça dans la page (Recap)
        document.write ("Hello" + prenom + "it's amazing! you are " + age + "years old !");
    }
    // 3. L'exécution de ma fonction    
    Hello();