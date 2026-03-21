function repetir (objetoASerRepetido,repetidor){
    let resultado = [];
    for (let index = 0; index < repetidor; index++) {
        resultado[index] = objetoASerRepetido;        
    }
    console.log(resultado);
}

repetir("codigo", 2);
repetir(7, 3);