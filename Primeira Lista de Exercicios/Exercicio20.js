/* 
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function caixaEletronico(valorSaque) {
    // 1. Definimos as notas disponíveis em ordem decrescente
    const notasDisponiveis = [100, 50, 10, 5, 1];
    let valorRestante = valorSaque;

    console.log(`Para o valor R$ ${valorSaque}:`);

    // 2. Percorremos cada nota da lista
    for (let nota of notasDisponiveis) {
        // Calculamos quantas notas dessa cabem no valor restante
        let quantidadeNotas = Math.floor(valorRestante / nota);

        // 3. Se a quantidade for maior que zero, exibimos e atualizamos o resto
        if (quantidadeNotas > 0) {
            console.log(`${quantidadeNotas} nota(s) de R$ ${nota}.`);
            
            // O novo valor restante é o que sobrou da divisão
            valorRestante = valorRestante % nota;
        }
    }
    console.log("=================")
}

caixaEletronico(18)
caixaEletronico(1800)
caixaEletronico(7)
caixaEletronico(50)

