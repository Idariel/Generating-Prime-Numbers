// GENERATION D'UNE LISTE ORDONNEE DE numbers DE 1 A 50
var numbers = [];
for (i=0; i<100; i++) {
  numbers[i] = i+1;
}
console.log("Tableau : "+numbers);


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


for (j=2; j<20; j++) {
  
}