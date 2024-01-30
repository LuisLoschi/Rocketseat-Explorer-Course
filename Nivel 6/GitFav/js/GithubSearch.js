export class GithubUser {
    static search(username) {
        //LOCAL DA API
        const endpoint = `https://api.github.com/users/${username}`

        //RETORNA OS DADOS DO USUÁRIO
        return fetch(endpoint)
        .then(data => data.json())
        .then(({ login, name, public_repos, followers }) => (
            {
                login,
                name,
                public_repos,
                followers,
            }
        ))
    }
}
