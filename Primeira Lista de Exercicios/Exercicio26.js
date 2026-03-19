/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.

*/

function encontrarPares1 (){
    let index = 1;
    while (index <= 100) {
        if (index % 2 === 0) {
            console.log(index)
        }
        index++;
    }
}
function encontrarPares2(){
    let index = 2;
    while (index <= 100) {
        console.log(index)
        index += 2; 
    }
}

encontrarPares1()
console.log ("=================")
encontrarPares2()