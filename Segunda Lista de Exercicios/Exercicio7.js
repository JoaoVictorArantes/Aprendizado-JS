function numerosMinMax (numero, minimo, maximo, incluso = false){
    if (incluso === false) {
        if (numero > minimo && numero < maximo) {
            console.log(true);
        } else {
            console.log(false);
        }  
    }else {
        if (numero >= minimo && numero <= maximo) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
      
}
//versao 2
function estaEntre(numero, minimo, maximo, incluso = false){
    if (incluso) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
}


numerosMinMax(10,50,100);
numerosMinMax(10,100,160);
numerosMinMax(3,3,150);
numerosMinMax(3,3,150,true);

estaEntre(10,50,100);
estaEntre(10,100,160);
estaEntre(3,3,150);
estaEntre(3,3,150,true);