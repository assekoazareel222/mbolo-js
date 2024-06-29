// Demander le montant de la facture à l'utilisateur
let montantFacture = parseFloat(prompt("Quel est le montant de votre facture ?"));

// Vérifier si le montant de la facture est valide
if (isNaN(montantFacture) || montantFacture <= 0) {
  console.log("Erreur : Le montant de la facture doit être un nombre positif.");
} else {
  // Calculer la remise (si applicable)
  let remise = 0;
  if (montantFacture > 40000) {
    remise = montantFacture * 0.1; // 10% de remise
  }

  // Calculer le total à payer
  let totalAPayer = montantFacture - remise;

  // Afficher le résultat
  console.log("Montant de la facture :", montantFacture.toFixed(2) + " F");
  console.log("Remise :", remise.toFixed(2) + " F");
  console.log("Total à payer :", totalAPayer.toFixed(2) + " F");
}
