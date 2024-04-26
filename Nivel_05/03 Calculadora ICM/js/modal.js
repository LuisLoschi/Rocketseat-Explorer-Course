//ESTRUTURANDO OS DADOS - PROPRIEDADE: VALOR
export const Modal = {
    popup: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal h2 span"),
    buttonClose: document.querySelector(".modal button.close"),


    open() {
        Modal.popup.classList.add('open')
    },

    close() {
        Modal.popup.classList.remove('open')
    },
}


//FECHAR POPUP
Modal.buttonClose.onclick = () => {
    Modal.close()
}


//FECHAR POPUP COM A TECLA 'ESC'
window.addEventListener('keydown', KeyDownClosePopup)

function KeyDownClosePopup(e) {
    //console.log(e.key)

    if (e.key == 'Escape') {
        Modal.close()
    }
}