// snack2 blocco 2
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

listaNomi = ["andrea", "francesco", "luca", "marcello", "davide"];
listaCognomi = ["pacifico", "borriello", "majorano", "vernieri", "capuozzo"];
falsaLista = [];

for (var i = 0; i < 5; i++) {
  random1 = Math.floor(Math.random() * 5);
  random2 = Math.floor(Math.random() * 5);
  document.getElementById('falsaLista').innerHTML += listaNomi[random1] + " " + listaCognomi[random2] + "<br>";
}
