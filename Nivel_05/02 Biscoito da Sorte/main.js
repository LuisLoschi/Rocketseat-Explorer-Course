//VARIAVEIS
const screnn1 = document.querySelector(".screnn-1")
const screnn2 = document.querySelector(".screnn-2")

const btnScrenn1 = document.querySelector("#btn-cookie")
const btnScrenn2 = document.querySelector("#btn-reset")

const phrase = document.querySelector("#text")

const phrases = [
    "A vida trará coisas boas se tiver paciência",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
    "Não compense na ira o que lhe falta na razão",
    "Defeitos e virtudes são apenas dois lados da mesma moeda",
    "A maior de todas as torres começa no solo"
]

let randomNumber = Math.round(Math.random() * 4) 


//EVENTOS
btnScrenn1.addEventListener('click', handleCookieClick)
btnScrenn2.addEventListener('click', handleToggleClick)
document.addEventListener('keydown', ResetClickEnter)

//LÓGICA DO JOGO
function handleCookieClick(e) {
    e.preventDefault();  

    toggleScrenn()

    changePhrase()
    
}

function changePhrase() {
    phrase.innerText = phrases[randomNumber] 
}


//VOLTA AO JOGO DESDE O INICIO
function handleToggleClick() {
    //Muda para primeira tela
    toggleScrenn()

    randomNumber = Math.round(Math.random() * phrases.length) //Gera novo valor aleatorio
    
    //array conta de 0 a 4, lenght conta de 1 a 5, essa condição conserta a lógica
    if (randomNumber == 5) {
        randomNumber-- 

        return randomNumber
    }
}

function toggleScrenn() {
    //Adiciona/esconde a tela 1
    screnn1.classList.toggle("hide")
    //Adiciona/esconde a tela 2
    screnn2.classList.toggle("hide")
}

//CLICAR COM ENTER NA SEGUNDA TELA
function ResetClickEnter(e) {
    if(e.key == 'Enter' && screnn1.classList.contains('hide')) {
        handleToggleClick()
    }
}