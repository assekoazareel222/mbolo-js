let moyenne = parseFloat(prompt("Quelle est votre moyenne ?"));

if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
  console.log("Erreur : La moyenne doit être un nombre compris entre 0 et 20.");
} else {
  
  let mention;
  if (moyenne < 10) {
    mention = "Passable";
  } else if (moyenne < 12) {
    mention = "Assez-Bien";
  } else if (moyenne < 14) {
    mention = "Bien";
  } else if (moyenne < 16) {
    mention = "Très Bien";
  } else {
    mention = "Excellent";
  }

 
  alert("Votre mention est : " + mention);
}
