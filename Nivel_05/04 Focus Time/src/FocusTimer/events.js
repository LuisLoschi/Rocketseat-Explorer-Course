import * as actions from "./actions.js"
import * as element from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function captureControlEvents() {
    //CAPTURA TODOS OS EVENTOS DE CLICK
    element.controls.addEventListener('click', (events) => {

        //LÓGICA COM O DATASET PARA CAPTURA DE AÇÕES
        const action = events.target.dataset.action

        //VERIFICA SE AÇÕES SÃO VALIDAS 
        if (typeof actions[action] !== 'function') {
            return
        }

        actions[action]()
    })
}


export function setMinutes() {
    //LIMPA CONTEUDO DA TAG COM EVENTO FOCUS
    element.minutes.addEventListener('focus', () => {
        element.minutes.textContent = ""
        element.seconds.textContent = ""
    })


    //LIMITA INPUT DOS MINUTOS APENAS PARA NÚMEROS
    element.minutes.onkeypress = (event) => /\d/.test(event.key) 

    //AJUSTAR OS MINUTOS CASO PASSE DE 60
    element.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent

        time = time > 60 || time == '' ? 60 : time

        state.minutes = time

        updateDisplay()
        element.minutes.removeAttribute('contenteditable')
    })
}

export function setSeconds() {
     //LIMITA INPUT DOS SEGUNDOS APENAS PARA NÚMEROS
    element.seconds.onkeypress = (event) => /\d/.test(event.key) 

    //AJUSTAR OS SEGUNDOS CASO PASSE DE 60
    element.seconds.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent

        time = time > 59 || time == '' ? 59 : time

        state.seconds = time //ATUALIZA COM NOVO VALOR

        updateDisplay()

        element.minutes.removeAttribute('contenteditable')
    })
}
