export default function initPerguntas() {
    const numeroIndicadorDaPergunta = document.querySelector(".sectionPergunta h1");
    const paragrafoDaPergunta = document.querySelector(".local_da_pergunta p");
    const botoesResposta = document.querySelectorAll("[data-botaoResposta]");
    let perguntaSelecionada;
    let contadorDaPergunta = 0;

    async function colocarPergunta(){
        const response = await fetch("js/perguntas.json");
        const jsonPerguntas = await response.json();
        const numeroDaPergunta = contadorDaPergunta;
        contadorDaPergunta++
        paragrafoDaPergunta.innerHTML = jsonPerguntas[numeroDaPergunta].pergunta;
        numeroIndicadorDaPergunta.innerHTML = `Pergunta ${numeroDaPergunta + 1}º`
        perguntaSelecionada = jsonPerguntas[numeroDaPergunta];
        if(numeroDaPergunta == jsonPerguntas.length - 1){
            recomecarQuiz("paginaDeRecomecar.html");
        }
    }
    colocarPergunta()

    function responderPergunta(botao) {
        const valorDoBotaoClicado = botao.target.getAttribute("data-botaoResposta");
        const conteinerDaPergunta = document.querySelector(".sectionPergunta")
        const somDeErrado = new Audio("../sons/Som-de-errado.mp3");
        const somDeCorreto = new Audio("../sons/Som-de-correto.mp3");
        if(valorDoBotaoClicado == perguntaSelecionada.resposta){
            conteinerDaPergunta.classList.remove("respostaErrada")
            somDeCorreto.play()
            colocarPergunta()   
        } else{
            conteinerDaPergunta.classList.add("respostaErrada")
            somDeErrado.play()
        }
    }

    function recomecarQuiz(link) {
        const botaoRecomecar = document.querySelector("[data-botaoResposta='true']")
        botaoRecomecar.classList.add("buttonStart")
        botaoRecomecar.setAttribute("href", link)
    }

    botoesResposta.forEach((botoes) => {
        botoes.addEventListener("click", responderPergunta)
    })
}