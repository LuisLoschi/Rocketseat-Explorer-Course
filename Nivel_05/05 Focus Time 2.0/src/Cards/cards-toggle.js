import * as element from "./card-elements.js"
import * as action from "./card-actions.js"


element.treeCardButton.addEventListener('click', () => {
    element.treeCardButton.classList.toggle('active')

    action.toggleMusicTree()
})

element.cloudCardButton.addEventListener('click', () => {
    element.cloudCardButton.classList.toggle('active')

    action.toggleMusicCloud()
})

element.coffeeCardButton.addEventListener('click', () => {
    element.coffeeCardButton.classList.toggle('active')

    action.toggleMusicCoffee() 
})

element.fireCardButton.addEventListener('click', () => {
    element.fireCardButton.classList.toggle('active')

    action.toggleMusicFire()
})