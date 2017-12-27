// HOW TO CREATE AUTOMATICALLY PRIME NUMBERS FROM 1 TO THE VALUE YOU WANT
// (i.e. prime numbers from 1 to 100 or 500 or 1000)

// GENERATION D'UNE LISTE ORDONNEE DE numbers DE 1 A 100
var numbers = [];
for (i=0; i<500; i++) {
  numbers[i] = i+1;
}
console.log("Tableau : "+numbers);


/*
====================================
// ENLEVER LES numbers MULTIPLIABLES PAR 2
for (i=2; i<numbers.length; i++) {
  var reste = numbers[i] % 2;
  // console.log(numbers[i]+" : "+reste);
      if (reste === 0) {
      numbers.splice(i,1);
      };
      // console.log("Non divisibles par 2 : "+numbers);
}
// console.log(numbers);

// ENLEVER LES numbers MULTIPLIABLES PAR 3
for (i=3; i<numbers.length; i++) {
  var reste = numbers[i] % 3;
  // console.log(numbers[i]+" : "+reste);
      if (reste === 0) {
      numbers.splice(i,1);
      };
}
console.log("Non divisibles par 3 : "+numbers);

// ENLEVER LES numbers MULTIPLIABLES PAR 5
for (i=5; i<numbers.length; i++) {
  var reste = numbers[i] % 5;
  // console.log(numbers[i]+" : "+reste);
      if (reste === 0) {
      numbers.splice(i,1);
      };
}
console.log("Non divisibles par 5 : "+numbers);

// ENLEVER LES numbers MULTIPLIABLES PAR 7
for (i=7; i<numbers.length; i++) {
  var reste = numbers[i] % 7;
  // console.log(numbers[i]+" : "+reste);
      if (reste === 0) {
      numbers.splice(i,1);
      };
}
console.log("Non divisibles par 7 : "+numbers+" - nombre de chiffres : "+numbers.length);
====================================*/



for (j=2; j<numbers.length; j++) {
  for (i=j; i<numbers.length; i++) {
    var reste = numbers[i] % j;
    // console.log(numbers[i]+" : "+reste);
        if (reste === 0) {
        numbers.splice(i,1);
        };
  }
//  console.log("Non divisibles par "+j+" : "+numbers+" - nombre de chiffres : "+numbers.length);
}
console.log("Nombres premiers : "+numbers+" - nombre de chiffres : "+numbers.length);

// Pour comparaison, liste des nombres premiers tirés d'internet :2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
