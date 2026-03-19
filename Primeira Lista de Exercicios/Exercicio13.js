/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

function verificaDiaSemana (dia){
    switch (dia) {
        case 1:
            console.log("domingo")
            break;
        case 2:
            console.log("segunda- feira")
            break;
        case 3:
            console.log("terça-feira")
            break;
        case 4:
            console.log("quarta-feira")
            break;
        case 5:
            console.log("quinta-feira")
            break;
        case 6:
            console.log("sexta-feira")
            break;
        case 7:
            console.log("sabado")
            break;
        default:
            console.log("Dia/numero inválido.")
            break;
    }
}
verificaDiaSemana(1) //domingo
verificaDiaSemana(7) //sabado
verificaDiaSemana(99) //invalido