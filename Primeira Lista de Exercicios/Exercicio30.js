/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor
 dentro do vetor.
*/

function maiorMenor (vetorDeNumeros){
    let menor 
    let maior 
    for (let i = 0; i < vetorDeNumeros.length; i++) {
        if (maior === undefined && menor === undefined){
            maior = vetorDeNumeros[i];
            menor = vetorDeNumeros[i];
        }else{
            if (vetorDeNumeros[i] > maior){
                maior = vetorDeNumeros[i]
            }        
            if (vetorDeNumeros[i] < menor){
                menor = vetorDeNumeros[i];
            }
        }
    }
    return console.log(`O menor numero do vetor é ${menor} e o maior é ${maior}`)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

maiorMenor(vetor)