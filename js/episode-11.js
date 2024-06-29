
let nombre = parseInt(prompt("Entrez un nombre : "));


if (isNaN(nombre)) {
  console.log("Erreur : Le nombre saisi n'est pas valide.");
} else {

  console.log("Table de multiplication de " + nombre + " :");
  for (let i = 1; i <= 10; i++) {
    alert(nombre + " x " + i + " = " + (nombre * i));
  }
}
