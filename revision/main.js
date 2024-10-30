// Variables et Types de Données
// Exercice 1 : Manipulation des types
// Créez une fonction typeChecker qui prend une variable en entrée et retourne son type (string, number, boolean, object, etc.). Testez cette fonction avec différents types de données, y compris null, undefined, array et object.

function typeChecker(element) {
  if (Array.isArray(element)) {
    return "L'element est un tableau";
  } else if (element === null) {
    return "L'element est null";
  }
  return "L'element est du type " + typeof element;
}
console.log(typeChecker("messi"));
console.log(typeChecker(12));
console.log(typeChecker(true));
console.log(typeChecker());
console.log(typeChecker(null));
console.log(typeChecker({}));
console.log(typeChecker([2, 4, 6]));

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 2 : Variables et portée
// Écrivez un programme qui démontre la différence entre var, let et const dans différents blocs de code (fonctions et boucles). Faites des console.log pour observer les différences.

const x = 3;
var y = 2;
let z = 4;
function test(a) {
  var scoreVar = a;
  let scoreLet = 0;
  const scoreConst = 0;
  for (let i = 0; i < 5; i++) {
    scoreVar += i;
    scoreLet += i;
    // scoreConst += i;
    console.log("scoreVar = " + scoreVar);
    console.log("scoreLet = " + scoreLet);
    console.log("scoreConst = " + scoreConst);
  }
  console.log(scoreVar);
  console.log(scoreLet);
  console.log(scoreConst);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 3 : Opérations sur les chaînes de caractères
// Créez une fonction formatName qui prend un nom complet sous la forme "dupont jean" et retourne une version formatée avec des majuscules : "Jean Dupont".
// Opérateurs

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 4 : Opérations arithmétiques et logiques
// Implémentez une calculatrice simple avec des opérations addition, soustraction, multiplication, division et modulo. La fonction calculator doit prendre en paramètre deux nombres et un opérateur (+, -, *, /, %), et retourner le résultat.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 5 : Opérateur ternaire et validation
// Écrivez une fonction isAdult qui prend un âge en entrée et retourne "Majeur" si l'âge est supérieur ou égal à 18, sinon retourne "Mineur", en utilisant l'opérateur ternaire.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Conditions
// Exercice 6 : Gestion des conditions complexes
// Créez une fonction detectSeason qui prend un mois en entrée et retourne la saison correspondante. Utilisez une structure switch pour cela.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 7 : Validation de formulaire
// Créez une fonction validateForm qui prend un objet avec les propriétés username, email et password. La fonction doit vérifier :
// Le username doit contenir au moins 5 caractères.
// L'email doit contenir un @ et un .
// Le password doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Boucles
// Exercice 8 : Parcours de tableaux et de chaînes
// Créez une fonction reverseWords qui prend une phrase en paramètre et retourne les mots inversés, par exemple "Hello World" devient "olleH dlroW".

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 9 : Tableaux imbriqués
// Écrivez une fonction sumMatrix qui prend une matrice (tableau 2D) et retourne la somme de tous les éléments. La fonction doit utiliser une boucle imbriquée pour parcourir la matrice.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 10 : Génération de nombres premiers
// Créez une fonction generatePrimes qui prend un nombre n en paramètre et retourne un tableau de tous les nombres premiers jusqu'à n inclus. Utilisez une boucle pour vérifier chaque nombre.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// DOM (Document Object Model)
// Exercice 11 : Manipulation du DOM - Création d'éléments
// Créez une page HTML avec un bouton et une div vide. Lorsque l'utilisateur clique sur le bouton, ajoutez un élément p avec un texte "Nouveau Paragraphe". Utilisez JavaScript pour gérer cet événement.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 12 : Manipulation du DOM - Validation de formulaire en temps réel
// Créez un formulaire HTML avec un champ de texte username et un champ password. Ajoutez des messages d'erreur en temps réel si le nom d'utilisateur contient moins de 5 caractères ou si le mot de passe est trop faible. Utilisez les événements input et blur.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 13 : Liste dynamique avec ajout et suppression d'éléments
// Créez une interface utilisateur avec une input et un bouton "Ajouter à la liste". Lorsque l'utilisateur saisit un texte et clique sur "Ajouter", ajoutez cet élément à une liste. Chaque élément de la liste doit avoir un bouton "Supprimer" pour le retirer de la liste.
// Exercices Bonus pour les Étudiants Avancés

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 14 : Mise en œuvre d’un compteur avec le DOM
// Créez un compteur qui affiche le nombre de clics sur un bouton. Le compteur doit augmenter à chaque clic sur le bouton, et un deuxième bouton doit permettre de réinitialiser le compteur à zéro.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Exercice 15 : Gestion des classes CSS via JavaScript
// Créez un bouton qui, lorsqu'il est cliqué, ajoute ou supprime une classe CSS spécifique d'un élément <div>. La classe CSS doit changer la couleur de fond de la div.
