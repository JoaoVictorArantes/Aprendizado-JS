/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/

function salario (plano, salarioAtual){
    switch (plano) {
        case "a":
            console.log((salarioAtual * 0.1) + salarioAtual)
            break;
        case "b":
            console.log((salarioAtual * 0.15) + salarioAtual)
            break;
        case "c":
            console.log((salarioAtual * 0.2) + salarioAtual)
            break;    
        default:
            console.log("Plano inválido")
            break;
    }
}

salario('a',100)
salario('b',100)
salario('c',100)