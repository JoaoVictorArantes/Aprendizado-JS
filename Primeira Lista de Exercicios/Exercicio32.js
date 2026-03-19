/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media(vetorDeNumeros){
    let soma; 
    for (let index = 0; index < vetorDeNumeros.length; index++) {
        if (soma === undefined) {
            soma = vetorDeNumeros[index]
        } else {
            soma = soma + vetorDeNumeros[index]
        }        
    }
    let retorno = soma / vetorDeNumeros.length
    return console.log(retorno);
}

let vetor = [7,8,9];
media(vetor)

// (x1 + x2 + x3)/3x