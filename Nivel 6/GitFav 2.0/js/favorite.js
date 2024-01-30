import { GithubSearchUser } from "./GithubSearch.js"

export class FavoritesData {
    constructor(root) {
        this.root = document.querySelector(root)

        this.tbody = document.querySelector('table tbody')

        this.loadData()

        this.update()

        this.hiddenView() 

        console.log("aqui")
    }

        
    loadData() {
        this.userData = JSON.parse(localStorage.getItem('@github-favorites:')) || []

        //console.log(this.userData)
 
    }

    saveUser() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.userData))
    }

    async add(username) {
        try {
            //Ver se usuário já existe
            const userExist = this.userData.find(input => input.login === username)

            if(userExist) {
                throw new Error("Usuário já existe")     
            }

            const user = await GithubSearchUser.search(username) //Espera devolver os dados do usuário

            //Caso usuário não exista
            if(user.login === undefined) {
                throw new Error("Usuário não encontrado ")
            }

            

            this.userData = [user, ...this.userData] //Adiciona o usuário
            this.update()
            this.saveUser()
            this.hiddenView()
            

            const cleanInput = document.getElementById('input-search')
            cleanInput.value = ''

        } catch(error) {
            alert(error.message)
        }
    }


    delete(user) {
        const filterInputNameUser = this.userData
            .filter(input => input.login !== user.login)
            
        this.userData = filterInputNameUser
        this.update()
        this.saveUser()

        this.hiddenView()

    }
}

export class FavoritesView extends FavoritesData {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()

        this.favoriteButtonClick()
    }   

    favoriteButtonClick() {
        const favoriteButton = this.root.querySelector('.search button')

        favoriteButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    hiddenView() {
        const favView = this.root.querySelector('.empty')

        console.log("number of users added: ", this.userData.length)

        let userNotAdded =  (this.userData.length == 0) ? favView.style.display = 'flex' : favView.style.display = 'none'
    }

    update() {
        this.removeUser() 

        this.userData.forEach(user => {
            const row = this.createRowData()

            const image       = row.querySelector('.user img')
            const altName     = row.querySelector('.user img')
            const hrefName    = row.querySelector('.user a')
            const name        = row.querySelector('.user p')
            const loginName   = row.querySelector('.user span')
            const repository  = row.querySelector('.repositories')
            const followers   = row.querySelector('.followers')
            const button      = row.querySelector('.remove')    

            image.src = `https://github.com/${user.login}.png`
            altName.alt = `Imagem de ${user.name}`
            loginName.textContent = user.login
            hrefName.href = `https://github.com/${user.login}` 
            name.textContent = user.name
            repository.textContent = user.public_repos
            followers.textContent = user.followers

            button.onclick = () => {
                const confirmRemoveUser = confirm(`Você tem certeza que quer remover ${user.login} da sua lista?`)

                if(confirmRemoveUser) {
                    this.delete(user)
                }

            }

            this.tbody.append(row)
        })
    }


    removeUser() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }

    createRowData() {
        const createRow = document.createElement('tr')

        createRow.innerHTML = `
        <td class="user">
            <img src="https://github.com/luisloschi.png" alt="Imagem de luis">
            <a href="https://github.com/luisloschi" target="_blank">
                <p>Luis Loschi</p>
                <span>Luisloschi</span>
            </a>
        </td>
        <td class="repositories">
            <p>80</p>
        </td>
        <td class="followers">
            <p>9000</p>
        </td>
        <td class="remove">
            <button class="remove">X</button>
        </td>
        `

        return createRow
    }

}