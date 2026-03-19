let a = 7;
let b = 94;

console.log("Os numeros antes da troca são: \t a - " + a +"\t b - " + b);

let Temp = 0 ;

Temp = b;
b = a;
a = Temp;

console.log("Os numeros após serem trocados são: \t a - " + a +"\t b - " + b);
console.log(`O numero ${a} e o numero ${b}`);
//let interpolacao = 'O numero ${a} e o numero ${b}';
//console.log(interpolacao)

//const up = texto => texto.toUpperCase();
//console.log(`Ei... ${up.('cuidado')}`);