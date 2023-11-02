import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

//TROCA DE PÁGINA AO CLICAR NO BOTÃO DE AVANÇO/RETORNO NO BROWSER
window.onpopstate = () => router.handle()

//REDIRECIONA A FUNÇÃO ROUTE PARA OS LINKS DA PÁGINA
window.route = () => router.route()

