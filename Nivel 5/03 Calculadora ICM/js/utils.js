//VALIDA SE O INPUT ESTÁ RECEBENDO NUMEROS
export function notANumber(value) {
    return isNaN(value) || value == ""
}


//CALCULO DO IMC
export function calcIMC(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)  //PESO / ALTURA^2  ARREDONDA PARA 2 CASAS DECIMAIS
}

export function classificationIMC(result) {
    if (result < 18.5) {
        return 'abaixo do peso';
    } 
    else if (result >= 18.5 && result <= 24.9 ) {
        return "com peso ideal!";
    }
    else if (result >= 25 && result <= 29.9 ) {
        return "levemente acima do peso";
    }
    else if (result >= 30 && result <= 34.9 ) {
        return "com obesidade grau I";
    }
    else if (result >= 30 && result <= 34.9 ) {
        return "com obesidade grau II - Severa!";
    }
    else {
        return "com obesidade grau III - Mórbida!";
    }
}
