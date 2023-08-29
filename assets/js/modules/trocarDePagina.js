import initPerguntas from "./perguntas.js"

export default function initTrocarDePagina() {
    const playButton = document.querySelector(".buttonStart")

    function cliqueAleatorio(event) {
        event.preventDefault()
        pegarUrl(event.target.href)
        window.history.pushState(null, null, event.target.href)
    }

    async function pegarUrl(url) {
        const resposta = await fetch(url)
        const textoHtml = await resposta.text()

        trocarDePagina(textoHtml)
    }

    function trocarDePagina(html){
        const novoHtml = document.createElement("section")
        novoHtml.innerHTML = html
        const antigoConteudo = document.querySelector(".conteiner")
        const novoConteudo = novoHtml.querySelector(".conteiner")
        document.title = novoHtml.querySelector("title").innerHTML
        antigoConteudo.innerHTML = novoConteudo.innerHTML
        
        initPerguntas();
    }

    playButton.addEventListener("click", cliqueAleatorio)

    window.addEventListener("popstate", () => {
        pegarUrl(window.location.href)
    })
}