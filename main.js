// Exercice1: Inverser les valeurs de deux variables
// À partir des variables suivantes, faire en sorte d'inverser leur valeur:
// -Declarer deux variables a et b et affecter leur respectivement ces valeurs: 1 et 5.
// -Inverser leurs valeurs de telle sorte que les valeurs se presente comme tel: a = 5; b = 1;

let a = 1;
let b = 5;
// premiere methode
let c = a;
a = b;
b = c;
console.log("a = " + a, "\n" + "b = " + b);
// deuxieme methode
[a, b] = [b, a];
console.log("a = " + a, "\n" + "b = " + b);
// -----------------------------------------------------------------------------------------------------------------

// Exercice2: Puissance de 2
// -Realiser un programme permettant à l'utilisateur de saisir la puissance de 2 qu'il souhaite.
// -Exemple: si l'utilisateur saisit 3, le programme affiche 2^3 = 8;
let puissance = 0; //initialisons une variable puissance à 0
while (true) {
  // Tant que c'est vrai Execute ce bloc de code
  //let x = prompt("Vous voulez le resultat de 2 à quel puissance ?"); // demande à l'utilisateur de rentrer un nombre a afficher a la puissance 2
  //puissance = Number(x);
  if (!isNaN(puissance)) {
    break; // sortie boucle
  }
}
console.log("2 ^ " + puissance + " = " + 2 ** puissance);

// -----------------------------------------------------------------------------------------------------------------

// Exercice3: Afficher une table de multiplication
// -Demander à l'utilisateur de rentrer la table de multiplication souhaiter.(de 1 à 10)

let chiffre = 0;
while (true) {
  let x = prompt("Vous voulez la table de multiplication de ?");
  chiffre = Number(x);
  if (!isNaN(chiffre) && chiffre != 0) {
    break; // sortie boucle
  }
}
for (let i = 0; i <= 10; i++) {
  console.log(chiffre + " x " + i + " = " + i * chiffre);
}
// -----------------------------------------------------------------------------------------------------------------

// Exercice4: Saisie clavier
// -Vous devez realiser un programme de saisir le nom, le prenom et l'age d'un utilisateur.
// -Le programme affiche ensuite le message suivant: votre nom est:"le nom que l'utilisateur à rentré";votre prenom est:"le prenom que l'utilisateur à rentré";vous avez:"l'age que l'utilisateur à rentré"
while (true) {
  var prenom = prompt("Veuillez rentrer votre Prénom");
  let prenomx = Number(prenom);
  if (isNaN(prenomx)) {
    break;
  }
}
while (true) {
  var nom = prompt("Veuillez rentrer votre Nom");
  let nomx = Number(nom);
  if (isNaN(nomx)) {
    break;
  }
}
while (true) {
  var age = prompt("Veuillez rentrer votre Âge");
  let agex = Number(age);
  if (!isNaN(agex) && agex != 0) {
    break;
  }
}

alert(
  "Le Prenom de l'utilisateur est : " +
    prenom +
    "\n" +
    "Le nom de l'utilisateur est: " +
    nom +
    "\n" +
    "L'âge de l'utilisateur est de : " +
    age
);
// -----------------------------------------------------------------------------------------------------------------

// Exercice5: Utiliser une boucle for pour afficher les nombres de 1 à 10 dans la console.

let container = [];
for (let i = 0; i <= 10; i++) {
  container.push(i);
}
console.table(container);
// -----------------------------------------------------------------------------------------------------------------

// Exercice6: Utiliser une boucle while pour afficher les nombres de 1 à 10 dans la console.

// -----------------------------------------------------------------------------------------------------------------

// Exercice7: Créer un tableau de noms de fruits (au moins 5 noms). Utilisez une boucle for pour afficher chaque nom de fruit dans la console.

// -----------------------------------------------------------------------------------------------------------------

// Exo-8: Conditions simples :
// Écris un programme qui demande un nombre et affiche si ce nombre est positif, négatif ou nul.

// -----------------------------------------------------------------------------------------------------------------

// Exo-9: Calcul de l’âge :
// Déclare une variable pour l’année actuelle et une autre pour ton année de naissance. Calcule et affiche ton âge en utilisant une opération de soustraction.

// -----------------------------------------------------------------------------------------------------------------

// Exo 10 : Opérations de base :
// Demande à l’utilisateur deux nombres et affiche la somme, la différence, le produit, et le quotient des deux.

// -----------------------------------------------------------------------------------------------------------------

// Exo 11: Trouver les nombres pairs :
// Écris une boucle for pour afficher tous les nombres pairs de 1 à 20.

// -----------------------------------------------------------------------------------------------------------------

// Exo 12: Conditions avancées :
// Demande un mot de passe à l’utilisateur. Si le mot de passe est "javascript123", affiche "Accès autorisé", sinon affiche "Accès refusé".

// -----------------------------------------------------------------------------------------------------------------

// Exo 13: Convertisseur Celsius-Fahrenheit :
// Crée une fonction qui prend une température en Celsius et la convertit en Fahrenheit. La formule est : F = C * 9/5 + 32. Utilise la fonction pour convertir une température et afficher le résultat.

// -----------------------------------------------------------------------------------------------------------------

// Exo 14: Filtrer un tableau :
// Déclare un tableau de nombres (par exemple, [2, 8, 5, 13, 4, 6, 7]). Utilise une boucle pour créer un nouveau tableau qui contient seulement les nombres supérieurs à 5, puis affiche ce nouveau tableau.

// -----------------------------------------------------------------------------------------------------------------

// Exo15:Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.
//  NB: 0   à   14 ans  => Enfants
//      15  à   25 ans  => Adolescents
//      25  à   64 ans  => Adultes
//      65 ans et plus  => Aînés
