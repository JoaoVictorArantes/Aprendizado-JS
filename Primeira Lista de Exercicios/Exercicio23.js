/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calculoNota(codigoAluno,nota1, nota2, nota3){
    let notas = [nota1,nota2,nota3].sort((a,b) => a - b);

    let mediaPonderada = (notas[2] * 4 + notas[1] * 3 + notas[0] * 3)/10;

    let status = mediaPonderada >= 5 ? "Aprovado" : "Reprovado"

    console.log(`Código: ${codigoAluno}`);
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
    console.log(`Média: ${mediaPonderada.toFixed(2)} - ${status}`);
    console.log("----------------------------")

}

calculoNota(100, 20,30,40)