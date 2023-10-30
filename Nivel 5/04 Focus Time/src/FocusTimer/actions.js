import state from "./state.js"
import * as timer from "./timer.js"
import * as element from "./elements.js"
import * as sound from "./sounds.js"

export function toggleRunning() {
    //RUNNING CONTROLS no css contém a lógica da adição da tag running
    state.isRunning = document.documentElement.classList.toggle('running')
    
    timer.countdown()

    sound.buttonPressAudio.play()
}

export function set() {
    element.minutes.setAttribute('contenteditable', true)
    element.seconds.setAttribute('contenteditable', true)

    element.minutes.focus()

    sound.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false

    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sound.bgAudio.play()
        return
    }

    sound.bgAudio.pause()
}