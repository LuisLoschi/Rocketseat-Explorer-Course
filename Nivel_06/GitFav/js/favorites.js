import { GithubUser } from "./GithubSearch.js"

//Logica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.loadData()

        
        //GithubUser.search('luisloschi').then(user => console.log(user))
    }

    loadData() {
        //ARMAZENA OS DADOS DO USUÁRIO NO LOCAL STORAGE DO BROWSER
        this.users = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    saveData() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
    }

    async add(username) {
        try {

            const userExists = this.users.find(entry => entry.login === username)

            console.log(userExists)

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            //ESPERA EXECUTAR A FUNÇÃO/PROMESSA ACABAR
            //BUSCA O USUÁRIO
            const user = await GithubUser.search(username)
            
            if (user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            //IMUTABILIDADE: SEMPRE ATUALIZA COM OS USUÁRIOS ANTERIORES QUE JÁ ESTÃO SALVOS
            this.users = [user, ...this.users]
            this.update()
            this.saveData()

        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        //AO DELETAR O USUÁRIO, FILTRA A TABELA PARA DELETAR APENAS O USUÁRIO ESCOLHIDO
        const filteredUsers = this.users
            .filter(entry => entry.login !== user.login)
        
        //ATUALIZA O 'loadDados' APÓS DELETAR UM USUÁRIO
        this.users = filteredUsers

        this.update()
        this.saveData()
    }
    
}


//Cria as vizualizações e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        
        this.tableLines = this.root.querySelector('table tbody')

        this.update()

        this.addUser()
    }

    addUser() {
        const addButton = this.root.querySelector('.search button')

        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
            //console.dir(value)
        }
    }


    update() {
        this.removeAllTableLines()

        //Consome os dados do github e mostra no html
        this.users.forEach(user => {
            const row = this.createRow()

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
                const isOk = confirm("Tem certeza que deseja deletar esse usuário?")

                if (isOk) {
                    this.delete(user)
                }
            }


            this.tableLines.append(row) //ADICIONA OS DADOS NUM ARRAY
        })

        

    }

    createRow() {
        //CRIA DAS TAGS 'TR' DO HTML
        const tr = document.createElement('tr')

        //CONTEUDO QUE SERÁ INSERIDO NA TAG 'TR'
        tr.innerHTML = `
                <td class="user">
                    <img src="https://github.com/luisloschi.png" alt="Imagem de luis">
                    <a href="https://github.com/luisloschi" target="_blank">
                        <p>Luis Loschi</p>
                        <span>Luisloschi</span>
                    </a>
                </td>
                <td class="repositories">
                    80
                </td>
                <td class="followers">
                    9000
                </td>
                <td>
                    <button class="remove">&times;</button>
                </td>
                `
        //MOSTRA O CONTEUDO NA TELA
        return tr
    }

    removeAllTableLines() {
        this.tableLines.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}