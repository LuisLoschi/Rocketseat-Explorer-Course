import state  from "../FocusTimer/state.js"
import * as element from "./card-elements.js"
import * as sound from "./card-sounds.js"

export function toggleMusicTree() {
    state.isMute = element.treeCardButton.classList.toggle('music-on')

    if(state.isMute) {
        sound.florest.play()
        return
    }

    sound.florest.pause()
}

export function toggleMusicCloud() {
    state.isMute = element.cloudCardButton.classList.toggle('music-on')

    if(state.isMute) {
        sound.rain.play()
        return
    }

    sound.rain.pause()
}

export function toggleMusicCoffee() {
    state.isMute = element.coffeeCardButton.classList.toggle('music-on')

    if(state.isMute) {
        sound.coffeeShop.play()
        return
    }

    sound.coffeeShop.pause()
}

export function toggleMusicFire() {
    state.isMute = element.fireCardButton.classList.toggle('music-on')

    if(state.isMute) {
        sound.fire.play()
        return
    }

    sound.fire.pause()
}