/* 
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/
function crescimento(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2){
    let maiorAltura, menorAltura, maiorTaxa, menorTaxa;
    if(altura1 === altura2){
        if (taxaDeCrescimento1 === taxaDeCrescimento2) {
            console.log("As alturas e as taxas de crescimento são iguais.")
        }if (taxaDeCrescimento1 > taxaDeCrescimento2) {
            return "As crianças têm a mesma altura, mas a Criança 1 ultrapassará a 2 em 1 ano.";
        } else if (taxaDeCrescimento2 > taxaDeCrescimento1) {
            return "As crianças têm a mesma altura, mas a Criança 2 ultrapassará a 1 em 1 ano.";
        }
    }
    if (altura1 < altura2){
        //console.log(`A primeira criança é maior com ${altura1}cm.`)
        altura1 = menorAltura;
        taxaDeCrescimento1 = menorTaxa
        altura2 = maiorAltura;
        taxaDeCrescimento2 = maiorTaxa
    }else{
        //console.log(`A segunda criança é maior com ${altura2}cm`)
        altura2 = menorAltura;
        taxaDeCrescimento2 = menorTaxa;
        altura1 = maiorAltura;
        taxaDeCrescimento1 = maiorTaxa;
    }

    if (menorTaxa <= maiorTaxa) {
        return "A criança menor não ultrapassará a maior porque sua taxa de crescimento é igual ou inferior.";
    }

    let anos = 0;
    while (menorAltura <= maiorAltura) {
        menorAltura += menorTaxa;
        maiorAltura += maiorTaxa;
        anos++;
    }

    return `A criança menor ultrapassará a maior em ${anos} anos.`;

}

console.log(crescimento(150, 2,130, 4))