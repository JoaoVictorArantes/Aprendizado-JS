/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá 
conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com 
valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes
 para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão
 aparecer no console.

*/

let vetorInteiro, vetorString, vetorDouble;
vetorInteiro = [1,2,3,4];
vetorString = ["um","dois","tres","quatro"];
vetorDouble = [1.1,2.2,3.3,4.4];

let vetorResposta1 = vetorInteiro.concat(vetorString,vetorDouble);
console.log(vetorResposta1);

let vetorResposta2 = vetorInteiro.concat(vetorString).concat(vetorDouble)
console.log(vetorResposta2);

let vetorResposta3 = [].concat(vetorInteiro,vetorString,vetorDouble);
console.log(vetorResposta3);

let vetorResposta4 = [...vetorInteiro,...vetorString,...vetorDouble];
console.log(vetorResposta4);