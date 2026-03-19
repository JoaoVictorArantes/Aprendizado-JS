/*
12) Faça um algoritmo que calcule o fatorial de um número.

*/

function factorial(numero){
    let resultado = 1;
    for (let index = numero; index > 1; index--) {
        resultado *= index;        
    }
    return console.log(`O fatorial de ${numero} = ${resultado}`)
}

factorial(3) //6
factorial(4) //24
factorial(5) //120