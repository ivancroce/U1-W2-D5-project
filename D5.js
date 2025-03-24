/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets.shift();
pets.push(firstPet);
console.log(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

cars[0].licensePlate = "123-A-45678";
cars[1].licensePlate = "231-B-32132";
cars[2].licensePlate = "321-C-87654";
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "Seat",
  model: "Arona",
  color: "white",
  trims: ["comfort", "SUV", "xcellence"],
  licensePlate: "312-D-33333"
};

cars.push(newCar);
console.log("Before: ", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("After: ", cars);

// to see properly the before part in the console, need to hide the for/after part

/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith(`b`)) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;

while (i < numericArray.length) {
  const num = numericArray[i];
  console.log(num);

  if (num === 32) {
    break;
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newArr = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  switch (character) {
    case "a":
      newArr.push(1);
      break;
    case "b":
      newArr.push(2);
      break;
    case "c":
      newArr.push(3);
      break;
    case "d":
      newArr.push(4);
      break;
    case "e":
      newArr.push(5);
      break;
    case "f":
      newArr.push(6);
      break;
    case "g":
      newArr.push(7);
      break;
    case "h":
      newArr.push(8);
      break;
    case "i":
      newArr.push(9);
      break;
    case "l":
      newArr.push(10);
      break;
    case "m":
      newArr.push(11);
      break;
    case "n":
      newArr.push(12);
      break;
    case "o":
      newArr.push(13);
      break;
    case "p":
      newArr.push(14);
      break;
    case "q":
      newArr.push(15);
      break;
    case "r":
      newArr.push(16);
      break;
    case "s":
      newArr.push(17);
      break;
    case "t":
      newArr.push(18);
      break;
    case "u":
      newArr.push(19);
      break;
    case "v":
      newArr.push(20);
      break;
    case "z":
      newArr.push(21);
      break;
  }
}

console.log(newArr);

// 🤯
// ultimo esercizio solo perche' e' stato menzionato nell'ultimo meeting che si deve scrivere dalla dalla a alla z...
// questo ha acceso la lampadina per la direzione giusta almeno...spero 😅
