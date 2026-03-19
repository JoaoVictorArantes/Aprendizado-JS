/* 
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.

*/

function funcaoMultiplica (vetorNumerico,numeroInteiro){
    let vetornumerico2 = []
    for (let index = 0; index < vetorNumerico.length; index++) {
        vetornumerico2 = vetorNumerico[index] * numeroInteiro   
    }
    return vetornumerico2;
}

function funcaoConcatena (vetornumerico2,numeroInteiro){
    let novoVetor = [];
    for (let index = 0; index < vetornumerico2.length; index++) {
        if (vetornumerico2[index] > 5) {
            novoVetor[index] = vetornumerico2[index] * numeroInteiro 
        }else{
            novoVetor[index]
        }
    }
    return novoVetor;
}
let vetor = [-1,2,3,4,5]
let resposta = funcaoMultiplica(vetor, 5)
console.log(funcaoConcatena(resposta,5 ))
