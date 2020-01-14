// jsnack 4 blocco 2
// Dare la possibilità di inserire due parole. Verificare tramite
// una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.

parola1 = prompt("inserire la prima parola");
parola2 = prompt("inserire la seconda parola");

console.log(confrontaLunghezza(parola1, parola2));

function confrontaLunghezza(string1, string2) {
  risultato = string1;
  if (string1.length == string2.length) {
    risultato = string1 + " " + string2;
  } else if (string2.length > string1.length) {
    risultato = string2;
  } 
  return risultato;
}
