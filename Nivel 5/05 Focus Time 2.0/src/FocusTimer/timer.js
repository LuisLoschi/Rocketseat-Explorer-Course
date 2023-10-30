import state from "./state.js";
import * as element from "./elements.js"
import { reset } from "./actions.js";
import * as sound from "./sounds.js"


export function countdown() {
    //CORRIGE ACUMULO DO TIME
    clearTimeout(state.countdownId)

    //CONFERE SE O DISPLAY ESTÁ RODANDO
    if (!state.isRunning) {
        return
    }

    //TRANSFORMA A STRING EM NUMBER
    let minutes = Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)

    //DECREMENTA O VALOR DOS SEGUNDOS
    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        sound.endTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    //RECURSÃO => CHAMANDO A FUNÇÃO DENTRO DELA MESMA 
    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes //CASO MINUTES FOR VAZIO, PEGA O VALOR DE INICIO DA FUNÇÃO DA MAINS
    seconds = seconds ?? state.seconds //CASO SECONDS FOR VAZIO, PEGA O VALOR DE INICIO DA FUNÇÃO DA MAIN

    //ESCREVE OS MINUTOS E SEGUNTOS NO DISPLAY
    element.minutes.textContent = String(minutes).padStart(2, "0")
    element.seconds.textContent = String(seconds).padStart(2, "0")
}