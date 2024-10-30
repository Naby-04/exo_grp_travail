let a = 1;
let b = 5;

console.log("A = " + a  + " et " + "B = "  + b);

[a , b] =[ b , a];
console.log("Valeur de A = valeur de B est : " + a  + " et " + "Valeur de B = valeur de A est : "  + b);


// Exo 2:

let valeurAmultiplier = prompt("Vous voulez multiplier quelle table ?")

for(let i = 0 ; i <= 10 ; i++) {
    console.log(valeurAmultiplier + " x " + i + " = " + i * valeurAmultiplier);
}

// Exo 3

// Exercice4: Saisie clavier
// -Vous devez realiser un programme de saisir le nom, le prenom et l'age d'un utilisateur.
// -Le programme affiche ensuite le message suivant: votre nom est:"le nom que l'utilisateur 
// à rentré";votre prenom est:"le prenom que l'utilisateur à rentré";vous avez:"l'age que l'utilisateur à rentré"

let nom = prompt("Veuillez entrer votre nom :");
let prenom = prompt("Veuillez entrer votre prénom :");
let age = prompt("Veuillez entrer votre âge :");

age = Number(age);


if (nom && prenom && !isNaN(age)) {
    alert(`Votre nom est : "${nom}";
        "/n" votre prénom est : "${prenom}"; vous avez : "${age}" ans.`);
} else {
    alert("Veuillez entrer un nom, un prénom, et un âge valides.");
}