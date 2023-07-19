function verificaSeChutePossuiValorInvalido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        console.log('Valor inválido')
    }

    if(numeroMaiorOuMenorQueValorPermitido (numero)){
        console.log(`Valor Inválido : O número secreto precisa estar entre ${menorValor} e o ${maiorValor}`)
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueValorPermitido (numero){
    return numero > maiorValor || numero < menorValor
}
