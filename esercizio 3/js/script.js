// blocco 2
// snack3 Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

$(document).ready(function() {
  var array = [20,14,45,123,545,3,6,78,88,300];
  console.log(sommaPosizioniDispari(array));
});

function sommaPosizioniDispari(array) {
  somma = 0;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      somma += array[i];
    }
  }
  return somma;
}
