
                    /*****************LES EVENEMENTS  ***************************/

                   
                    /* Les evenements vont me permettre de déclencher une fonction
                    c'est à dire: une série d'instructions suite a une action de mon
                    utilisateur.

                    OBJECTIF : Etre en mesure de capturer ces evenements afin d'exécuter une fonction.

                    Les Evenements : MOUSE (souris)

                    click       : au clic sur un élément
                    mouseenter  : la souris passe au dessus de la zone qu'occupe un élément
                    mouseleave  : la souris sort de cette zone

                    Les Evenements : KEYBOARD (clavier)

                    keydown        : une touche de clavier est enfoncée
                    keyup          : une touche au clavier a été relachée

                     Les Evenements    : Window (fenêtre)
                    sroll          : défilement de la fenêtre
                    resize         : redimensionnement de la fenêtre   

                    Les Evenements : FORM (Formulaire)

                    change         : pour les éléments <input>, <select> et <textarea>
                    submit         : à l'envoi (soumission) du formulaire
                    input          : pour capter la saisie d'un utilisateur sur un champ <input>

                    ################ LES ECOUTEURS D EVENEMENTS ###########################

                        Pour attacher un évènement à un élément ou autrement dit, pour déclarer
                        un ecouteur d'evenement qui se chargera de declencher une fonction, je 
                        vais utiliser la syntaxe suivante :

                   ************************************************************** */

                   var p = document.getElementById("MonParagraphe");

                   // -- Je souhaite que mon paragraphe soit rouge au clic de la souris

                   // -- 4. Je définis une fonction qui sera chargée d'exécuter cette action

                   function changeColorToRed() {
                       p.style.color = "red";
                   }

                   p.addEventListener("click", changeColorToRed);

                   // creation du champ input
                   var input =  document.createElement("input");

                   // -- attribution d'un attribut
                   input.setAttribute("type","text");
                   input.setAttribute("placeholder","Saisissez un contenu...");

                   //-- Attribution d'un ID
                   input.id = "monInput";

                   //-- Ajout de l'élément dans ma page
                   document.body.appendChild(input);

                   function VoirlaSaisieDeMonInput() {
                       alert(input.value);
                   }
                   
                   input.addEventListener("change", VoirlaSaisieDeMonInput);
