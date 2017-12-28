
(PremierTrimestre);

document.write("<ol>");
// -- Je souhaite afficher la liste de mesetudiants

for(let i =0; i < PremierTrimestre.length; i++) {

    //-- On recup l'Objet Etudiant de l'iteration
        let Etudiant = PremierTrimestre[i];

    // -- Aperçu dans la console    
    console.log(Etudiant);   
    NombreDeMatiere++;
    SommeDesNotes += Etudiant.moyenne[matiere];

    // Ici, mes variables seront remises à . à chaque nouveau étudiant.
    //(itération)
    var NombredeMatiere = 0, SommeDesNotes = 0;

// -- Afficher le Prenom et le Nom d'un Etudiant
console.log(Etudiant.prenom + " " + Etudiant.nom) ;
}

document.write("<li>");
    document.write(Etudiant.prenom + " " + Etudiant.nom);
    for(let matiere in Etudiant.moyenne) {
        console.log(matiere);
        console.log(Etudiant.moyenne[matiere])
        document.write("<li>");
            document.write(matiere + ":" + Etudiant.moyenne[matiere]);
        document.write("<li>");    
  } // Fin boucle matiere
    
document.write("<li>");
}// fin boucle Etudiant

document.write("<ol>");