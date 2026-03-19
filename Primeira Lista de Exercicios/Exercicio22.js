/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function associacao (numeroMes, valorAnuidade){
    switch (numeroMes) {
        case 1:
            console.log("O valor a ser pago no mês de janeiro é de R$" + valorAnuidade)
            break;
        case 2:
            console.log("O valor a ser pago no mês de fevereiro é de R$" + (valorAnuidade * (1 + 0.05) ** 1))
            
            break;
        case 3:
            console.log("O valor a ser pago no mês de março é de R$" + (valorAnuidade * (1 + 0.05) ** 2))
            
            break;
        case 4:
            console.log("O valor a ser pago no mês de abril é de R$" + (valorAnuidade * (1 + 0.05) ** 3))
            
            break;
        case 5:
            console.log("O valor a ser pago no mês de maio é de R$" + (valorAnuidade * (1 + 0.05) ** 4))
            
            break;
        case 6:
            console.log("O valor a ser pago no mês de junho é de R$" + (valorAnuidade * (1 + 0.05) ** 5))
            
            break;
        case 7:
            console.log("O valor a ser pago no mês de julho é de R$" + (valorAnuidade * (1 + 0.05) ** 6))
            
            break;
        case 8:
            console.log("O valor a ser pago no mês de agosto é de R$" + (valorAnuidade * (1 + 0.05) ** 7))
            
            break;
        case 9:
            console.log("O valor a ser pago no mês de setembro é de R$" + (valorAnuidade * (1 + 0.05) ** 8))
            
            break;
        case 10:
            console.log("O valor a ser pago no mês de outrubro é de R$" + (valorAnuidade * (1 + 0.05) ** 9))
            
            break;
        case 11:
            console.log("O valor a ser pago no mês de novembro é de R$" + (valorAnuidade * (1 + 0.05) ** 10))
            
            break;
        case 12:
            console.log("O valor a ser pago no mês de dezembro é de R$" + (valorAnuidade * (1 + 0.05) ** 11))
            
            break;  
        default:
            console.log("Numero do mês (1-12) inválido.")
            break;
    }
    console.log("====================")
}

function associacao2(mes, montante){
    if (mes > 0 && mes < 13){
        let atraso = mes - 1;

        let valorComJuros = montante * (1.05 ** atraso);

        return console.log(valorComJuros.toFixed(2))
    }else{
        console.log("mes inválido.")
    }
    console.log("==========")
}

associacao(1,100)
associacao(3,100)
associacao(12,100)

associacao2(1,100)
associacao2(3,100)
associacao2(12,100)