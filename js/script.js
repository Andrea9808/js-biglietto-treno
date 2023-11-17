//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//Questo richiederà un minimo di ricerca.




//chiedere numero di chilometri
const userKm = parseInt(prompt("Quanti km vuoi fare?"));
//console.log(userKm);

//chiedere l'età del passeggero
const userEta = parseInt(prompt("Quanti anni hai?"));
//console.log(userEta);

//prezzo del biglietto
let price = (0.21 * userKm);


//il programma decide se è minorenne o over 65
if(userEta < 18) {
    let discountTwenty = (price * 20)/ 100;
    total = price - discountTwenty;
    console.log ("Con Sconto: " + total + "€");

}else if (userEta >= 65){
    let discountForty = (price * 40)/ 100;
    total = price - discountForty;
    console.log ("Con Sconto: " + total + "€");

}else{
    total = price;
    console.log ("Senza sconto: " + total + "€");
};

// output con sole due cifre

document.getElementById('boardingpass').innerHTML = 'Il costo del tuo biglietto è di: ' + parseFloat(total).toFixed(2) + '€';

