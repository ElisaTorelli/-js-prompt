let nome = window.prompt("Enter your first name: ");
let cognome = window.prompt("Enter your last name: ");
let dataDiNascita = window.prompt("Enter your date of birth: ");
let luogoDiNascita = window.prompt("Enter your place of birth: ");
let segnoZodiacale = window.prompt("Enter your zodiac sign: ");


document.getElementById("main-container").innerHTML = `Il tuo nome è: ${nome} <br> Il tuo cognome è: ${cognome} <br> Il tuo luogo di Nascita è: ${luogoDiNascita} <br> La tua data di Nascita è: ${dataDiNascita} <br> Il tuo segno zodiacale è: ${segnoZodiacale}`;