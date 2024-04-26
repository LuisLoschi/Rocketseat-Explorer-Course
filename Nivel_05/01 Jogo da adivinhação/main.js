//VARIAVEIS
const screnn1 = document.querySelector(".screnn-1")
const screnn2 = document.querySelector(".screnn-2")

const btnScrenn1 = document.querySelector("#btn-try")
const btnScrenn2 = document.querySelector("#btn-reset")

const inputNumber = document.querySelector("#input-number")

let randomNumber = Math.round(Math.random() * 10) //GERAR VALOR ALEATÓRIO
//console.log(randomNumber)

let attempts = 1 //NUMERO DE TENTATIVAS


//EVENTOS
btnScrenn1.addEventListener('click', handleTryClick)
btnScrenn2.addEventListener('click', handleResetClick)
document.addEventListener('keydown', ResetClickEnter)

//LÓGICA DO JOGO
function handleTryClick(e) {
    e.preventDefault();  

    //Evitar de enviar o palpite com o input vazio
    if (inputNumber.value == "" || inputNumber.value > 10 || inputNumber.value < 0) {
        inputNumber.style.border = '2px solid red'

        alert("Insira um valor de 0 a 10")
    } 
    
    else {
        inputNumber.style.border = 'none' //Retira borda vermelha

        //Caso acerte o número
        if (Number(inputNumber.value) == randomNumber) {
            //Muda para segunda tela
            toggleScrenn()
    
            //Mudar valor de tentativas da tela 2
            if (attempts == 1) {
                screnn2.querySelector("h2").innerText = "Acertou de primeira ! 🏆"
            } 
            else {
                screnn2.querySelector("h2").innerText = `Acertou em ${attempts} tentativas 🏆`
            }
        }  
    
        inputNumber.value = "" //Apagar valor após adivinhação
        attempts++ //Soma o numero de vezes que tentou acertar o número 
    }
}

//VOLTA AO JOGO DESDE O INICIO
function handleResetClick() {
    //Muda para primeira tela
    toggleScrenn()

    attempts = 1 //Reseta numero de tentativas
    randomNumber = Math.round(Math.random() * 10) //Gera novo valor aleatorio
    console.log(randomNumber)
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
        handleResetClick()
    }
}