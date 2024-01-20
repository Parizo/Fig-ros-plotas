let krepsininkai = [23, 9, 11, 57, 69];
let ugiai = [211, 195, 199, 215, 191];
let dvitaskiai = [15, 20, 98, 14, 48];
let tritaskiai = [2, 5, 6, 1, 2];

//Raskite vidutinį krepšininkų ūgį ATS: 202.2

let sum = 0;
for (let i = 0; i < ugiai.length; i++){
    sum = sum + ugiai[i];
    countPersons = ugiai.length;
};

let avarageHeight = sum / countPersons;

console.log(`Vidutinis krepšininkų ūgis yra: ${avarageHeight}`);

//Raskite kiek krepšininkų yra didesnių už vidutinį krepšininkų ūgį 
let count = 0;
for (let i = 0; i < ugiai.length; i++) {
    if( ugiai[i] > avarageHeight) {
        count++;
    }
};
console.log(`Krepšininkų yra didesnių už vidutinį krepšininkų ūgį yra: ${count}`);
//Raskite aukščiausio krepšininko dvitaškių skaičių ?

let maxBasketBallPlayer = Math.max(...ugiai);
let indexOffDoublePoints = ugiai.indexOf(maxBasketBallPlayer);

console.log(`Aukščiausio krepšininko dvitaškių skaičius yra: `+dvitaskiai[indexOffDoublePoints]);

//raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr. ? 

let minBasketBallPlayer = Math.min(...ugiai);
let indexOffTriplePoints = ugiai.indexOf(minBasketBallPlayer);

console.log(`Žemiausio krepšininko tritaškių skaičius yra: ` +tritaskiai[indexOffTriplePoints]);
