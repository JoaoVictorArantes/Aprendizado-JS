function inverso(numeroOuBool){
    let tipo = typeof numeroOuBool;
    if (tipo === "boolean") {
        console.log(!numeroOuBool)
    } else if (tipo === "number"){
        console.log(-numeroOuBool)
    }else {
        console.log(`O parâmetro esperado era Boolean ou Numero. O numero informado é ${tipo}.`);
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("Programação")