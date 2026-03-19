/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3).
A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.
 Crie um caso default para operações inválidas
*/

function calculadora (numero1, operacao, numero2){
    switch (operacao) {
        case "+":
            console.log(numero1+numero2)
            break;
        case "-":
            console.log(numero1-numero2)
            break;
        case "*":
            console.log(numero1*numero2)
            break;
        case "/":
            console.log(numero1/numero2)
            break;
    
        default:
            console.log("operações inválidas");
            break;
    }
}

calculadora(2,"+", 2)
calculadora(2,"-", 2)
calculadora(2,"*", 2)
calculadora(2,"/", 2)
calculadora(2,"f", 2)