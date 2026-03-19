/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function negativos(vetorDeNumeros){
    let negativos = 0 ;
    for (let index = 0; index < vetorDeNumeros.length; index++) {       
        if (vetorDeNumeros[index] < 0) {
            negativos++;
        }       
    }
    return console.log(`Tem ${negativos} numeros negativos neste vetor.`);
}

let vetor = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -1, 12, 13]

negativos(vetor)