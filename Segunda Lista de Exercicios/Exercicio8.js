function multiplicar (numero1 , numero2){
    let resultado = 0;
    if (numero1 < 0 || numero2 < 0) {
        return false
    }else {
        for (let index = 0; index < numero2; index++) {
            resultado += numero1;
        }
        console.log(resultado);
    }
}

multiplicar(5,5)
multiplicar(0,7)