
let nom = prompt("Quel est votre nom ?");

let sexe = prompt("Quel est votre sexe (M/F) ?").toUpperCase(); // Convertir la saisie en majuscule


let message;
if (sexe === "M") {
  message = "Bonjour monsieur ";
} else if (sexe === "F") {
  message = "Bonjour madame ";
} else {
  message = "Bonjour "; 
}

alert(message + nom);
