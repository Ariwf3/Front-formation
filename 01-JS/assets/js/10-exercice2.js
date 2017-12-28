

var Eleves = [
    { prenom: "Hugo", nom: "LIEGARD" },
    { prenom: "Mara", nom: "BABA" },
    { prenom: "Vic", nom: "MACKAY"},
    { prenom: "Jax", nom: "TELLER" },
    { prenom: "Jimmy", nom: "MCNULTY" }
];
    



var MoyPremierTrimestre = [
    {
        prenom: "Hugo", nom: "LIEGARD",
         moyenne: {
            français: 12,
            math: 15,
            histoire:18
        }
    },

    {
    prenom: "Mara", nom: "BABA",
     moyenne: {
        français: 19,
        math: 16,
        histoire:18
    }
    },

    {
     prenom: "Vic", nom: "MACKAY",
        moyenne: {
            français:20,
            math: 17,
            histoire:18
        }
    }, 

    {   
        prenom: "Jax", nom: "TELLER",
        moyenne: {
            français: 9,
            math: 2,
            histoire:14
        }
    },  

    {
        prenom: "jimmy", nom: "MCNULTY",
        moyenne: {
            français: 20,
            math: 11,
            histoire:14
        }
    }    
];


function moyenne_gen (note1,note2,note3) {
    
    return parseInt((note1 + note2 + note3) / 3)
};


document.write(moyenne_gen(MoyPremierTrimestre[1].moyenne.français,MoyPremierTrimestre[1].moyenne.math,MoyPremierTrimestre[1].moyenne.histoire));









