export class Router{

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        //VERIFICA SE TEM ALGUM EVENTO NA PÁGINA
        event = event || window.event 
    
        //EVITA O COMPORTAMENTO PADRÃO DA PÁGINA
        event.preventDefault() 
    
        //BUSCA HISTORICO DOS LINKS ACESSADOS
        window.history.pushState({}, "", event.target.href) 
    
    
        this.handle()
    }


    handle() {
        //const pathname = window.location.pathname
        const { pathname } = window.location //DESESTRURAÇÃO
    
        //PEGA A PÁGINA DESCRITA EM ROUTES
        const route = this.routes[pathname] || this.routes[404]
    
        //CARREGA O CONTEUDO DA PÁGINA AO CLICAR NOS LINKS DE NAVEGAÇÃO
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
}