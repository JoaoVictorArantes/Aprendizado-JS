/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

*/

function calculaParesImpares (vetorDeNumeros){
    let pares = 0;
    let impares = 0;    
        
    for (let index = 0; index < vetorDeNumeros.length; index++) {
       if (vetorDeNumeros[index] % 2 === 0) {
        pares++;
       }else{
        impares++;
       }        
    }
    console.log(`Par: ${pares}, Impar: ${impares}`);
}
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
calculaParesImpares(vetor)