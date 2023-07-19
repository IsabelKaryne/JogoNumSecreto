function verificaSeChutePossuiValorInvalido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += 
        '<div> valor inválido </div>'
        return
    }

    if(numeroMaiorOuMenorQueValorPermitido (numero)){
        elementoChute.innerHTML += `
        <div>
            Valor Inválido : Fale um número entre ${menorValor} e o ${maiorValor}
        </div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueValorPermitido (numero){
    return numero > maiorValor || numero < menorValor
}
