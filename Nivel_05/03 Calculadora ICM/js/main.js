import { Modal } from "./modal.js"  
import { AlertError } from "./alert.js"
import { calcIMC, classificationIMC , notANumber } from "./utils.js"

//VARIAVEIS
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//LÊ OS INPUTS E FECHA O ALERTA AO DIGITAR UM NÚMERO
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


//TRANTANDO OS DADOS DO FORMULÁRIO
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return 
    }

    AlertError.close()

    const result = calcIMC(weight, height)

    displayResultCalculation(result)
}


function displayResultCalculation(result, ) {
    const message = `Seu IMC é de ${result} \n\n Você está ${classificationIMC(result)}`

    Modal.message.innerText = message
    Modal.open()
}

