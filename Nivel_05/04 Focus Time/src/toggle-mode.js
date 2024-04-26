let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {

    //ADICIONAR/TIRAR CLASSE TEMA LIGHT
    document.documentElement.classList.toggle('light')

    //ATIVAR DARK/LIGHT MODE
    const mode = darkMode ? 'Light' : 'Dark'

    //ACESSIBILIDADE AVISANDO QUAL TEMA ESTA ATIVO
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    //HABILITA TROCA DOS TEMAS NA ACESSIBILIDADE
    darkMode = !darkMode
})