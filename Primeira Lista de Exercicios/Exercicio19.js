/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function cardapioLachonete (itemPedido, quantidade){
    switch (itemPedido) {
        case 100:
            console.log("O Cachorro Quente deu R$" + quantidade * 3)
            break;
        case 200:
            console.log("O Hambúrguer Simples deu R$" + quantidade * 4)
            break;
        case 300:
            console.log("O Cheeseburguer deu R$" + quantidade * 5.5)
            break;
        case 400:
            console.log("O Bauru deu R$" + quantidade * 7.5)
            break;    
        case 500:
            console.log("O Refrigerante deu R$" + quantidade * 3.5)
            break;
        case 600:
            console.log("O Suco deu R$" + quantidade * 2.80)
            break;
        default:
            console.log("Produto não existente")
            break;
    }
}

cardapioLachonete(100, 4)
cardapioLachonete(200, 4)
cardapioLachonete(300, 4)
cardapioLachonete(400, 4)
cardapioLachonete(500, 4)
cardapioLachonete(600, 4)
cardapioLachonete(900, 4)