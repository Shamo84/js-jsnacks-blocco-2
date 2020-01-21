// Snack blocco 2
// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

$(document).ready(function() {
  numeroUtente = parseInt(prompt("inserisci un numero per sapere se è primo"));
  isPrime(numeroUtente);
});

function isPrime(num) {
  if (Math.pow(2, num) % num == 2) {
    alert("il tuo numero è primo");
  } else {
    alert("il tuo numero non è primo");
  }
}
