$(document).ready(function(){

  // DESCRIZIONE:
  // - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  // -Stampare a schermo attraverso il for in tutte le proprietà;
  // - Creare un array di oggetti di studenti.
  // -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
 var studente = {
   nome: "Stefano",
   cognome: "Ander",
   eta: 25
 };

  // -Stampare a schermo attraverso il for in tutte le proprietà;
 for (var key in studente) {
   $("h1").append(key + "<br>");
 }

  // - Creare un array di oggetti di studenti.

  var studente1 = {
    nome: "Omar",
    cognome: "Ander",
    eta: 25

  };var studente2 = {
    nome: "Stefan",
    cognome: "Ander",
    eta: 25

  };var studente3 = {
    nome: "Claudio",
    cognome: "Pasqualotti",
    eta: 25
  };

  var studenti = [ studente1, studente2, studente3 ]
  // console.log(studenti);

  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var insertNome = prompt("Inserisci un nome");
  var insertCognome = prompt("Inserisci un cognome");
  var insertEta = prompt("Inserisci un età");

  var studenti4 = {
    nome: insertNome,
    cognome: insertCognome,
    eta: insertEta
  }

  studenti.push(studenti4);

  // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

  for (var i = 0; i < studenti.length; i++) {
    for (var parametro in studenti[i]) {
      if (parametro === "eta") {
        $("h2").append("<br>");
      } else {
        $("h2").append(studenti[i][parametro] + "<br>");
      }
    }
  }

});
