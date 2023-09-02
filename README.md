<div> 
  <h1 align="center">Quiz Javascript - JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Quiz com cinco perguntas sobre Javascript</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/Quiz-Javascript/assets/112639055/ccf81a5c-6b58-4c2d-8b55-fde417ee181f" width='850px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>

<div>
	<p>Aplicação consiste em uma página de quiz com cinco perguntas sobre javascript, tendo a opção de verdadeiro ou falso. As perguntas são pegas de um arquivo JSON, podendo adicionar mais perguntas se nescessários, tornando a quantidade de perguntas alterável.</p>
	<p>Fiz esse projeto para treinar meus conhecimentos em javascript, principalmente sobre módulos e requisição http(feath). Criei uma alteração entre as páginas sem precisar recarregar a página.</p>
</div>
 
### Acessar projeto ✈

◻<a href="https://willianol.github.io/Quiz-Javascript/assets/index.html">Quiz Javascript</a>

## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

<h3>Código para trocar de página sem recarregar</h3>
<section>
	<p>Neste projeto, criei a troca de página sem precisar recarregar a mesma. Para fazer isso, primeiro criei as três páginas HTML. São elas:</p>
	<ul>
		<li><strong>index.html</strong> - página principal, onde se iniciará o quiz;</li>
		<li><strong>quizPage.html</strong> - página onde vão ser colocadas as perguntas;</li>
		<li><strong>paginaDeRecomecar.html</strong> - página final, onde pode-se recomeçar o quiz;</li>
	</ul>
	<p>Depois, separei o javascript em módulos pois achei melhor para trabalhar e depois dar manuntenção ao código. Então criei o arquivo <strong>"trocarDePagina.js"</strong> onde ficará o código para trocar de página. Nele, primeiro criei uma variável que pegará o elemento que tiver a classe <strong>"buttonStart"</strong>(botao para iniciar o quiz).</p>
 	<div align="center">
		<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/e3a99259-fcd0-47f2-af81-0b586d41e7db" width="650px">
	</div>
	&nbsp;
	<p>Logo após, no botão adiciono o evento de click com o método ".addEventListener()" para chamar a função <strong>cliqueAleatorio()</strong></p>
	<div align="center">
		<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/83dd1acd-9f6c-45a1-ba09-0aa65ff83c2b" width="650px">
	</div>
	<article>
		<h4>Função cliqueAleatorio()</h4>
		<p>Passando como parâmetro o "event", ela é responsável por pegar qualquer clique no botão e chamar a função pegarUrl() passando como parâmetro o href do event. Nela também é passado o mesmo link no history para mudar a URL do navegador sem dar refresh na página.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/080fa4bd-ad2a-40f8-a154-08126eea9ec4" width="650px">
		</div>
	</article>
	<article>
		<h4>Função pegarUrl()</h4>
		<p>Essa é a função responsável por pegar a url através da requisição http feach e transformá-la em texto. Ou seja, ela vai pegar o html da página de destino e transformar em texto. Como é uma requisição, a função é assincrona e o que retorna é uma promise, utilizei o async e o await. No final, a função trocarDePagina é chamada passando o html em texto como argumento.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/df33f19e-7ed8-48a5-afa4-6b4b351499ba" width="650px">
		</div>
	</article>
	<article>
		<h4>Função trocarDePagina()</h4>
		<p>Essa função é responsável por fazer a troca de página sem atualizar a mesma. Ela possui o parâmetro "html" que é o HTML em forma de texto passado pela função pergarUrl(). Na função, primeiro é criada a variável "novoHtml" que cria um elemento section, depois o novoHtml recebe o html em texto com um .innerHTML.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/4f2d34d9-2406-41d3-9b02-9432b58eb13e" width="650px">
			<br>
			<br>
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/9d6a4435-1cda-4bf4-889e-32ec8d647753" width="650px">
		</div>
		<p>Depois, mais duas variáveis são criadas, "antigoConteudo" que pega o conteiner onde ficará o novo HTML, e "novoConteudo" que pega o mesmo conteiner só que do HTML novo(Os dois HTML's tem que ter o mesmo elemento com a classe ".conteiner"). Depois o titulo da página recebe o titulo novo e é feito um innerHTML passando o conteudo novo para o que já está na página.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/4c892991-57da-4109-9756-4ce9d7efbdd0" width="650px">
		</div>
		<p>O arquivo do código das perguntas foi importado neste. Depois executado ao final da troca de página, pois assim evita que ocorra o erro do código carregar mais rápido que a trocar de página, então é executado somente quando a página carregar, ou seja, na função "trocaDePagina()".</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/95597d85-5b30-4560-97ad-b3aa0b2528d8" width="650px">
		</div>
	</article>
</section>

<h3>Código do funcionamento das perguntas</h3>
<section>
	<article>
		<h4>Arquivo JSON das perguntas</h4>
		<p>Para armazenar as peguntas, criei um arquivo JSON. Nele, possui objetos com as perguntas com suas respostas, armezenando um valor booleano. Ele possui cinco perguntas, porém é possível adicionar ou remover perguntas, pois o código é flexivel nesse quesito.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/d803ee43-307b-405b-a2ac-d4f3d40004cb" width="650px">
		</div>
	</article>
	<article>
		<h4>Variáveis importantes</h4>
		<p>Primeiro, para a elaboração do código para exibir e responder as perguntas, criei cinco variáveis imprtantes. São elas:</p>
		<ul>
			<li><strong>numeroIndicadorDaPergunta</strong> - Pega o h1 onde ficará o número indicador da pergunta. EX: Pergunta 1º, 2º ...;</li>
			<li><strong>paragrafoDaPergunta</strong> - Paragrafo onde será colocado a pergunta;</li>
			<li><strong>botoesResposta</strong> - Botões para responder a pergunta. (verdadeiro ou falso);</li>
			<li><strong>perguntaSelecionada</strong> - Variável que armazenará a pergunta do arquivo JSON;</li>
			<li><strong>contadorDaPergunta</strong> - variável onde ficará o número que indicará qual é a pergunta que o usuário está, começando com 0 pois é a partir dos index de uma array.</li>
		</ul>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/fa39620d-febd-4c70-a9dd-7b1ff5e6b4da" width="650px">
		</div>
		&nbsp;
		<p>Depois disso, a função colocarPerguntas() é executada.</p>
	</article>
	<article>
		<h4>Função colocarPerguntas()</h4>
		<p>A função <strong>colocarPerguntas</strong> é assincrona. Ela serve para pegar as peguntas do arquivo JSON e exibilas na tela de acordo com o valor da variável contadorDaPergunta. Nela usei a seguinte lógica: Atribui o valor da variável contadorDaPergunta em outra variável(numeroDaPergunta), então toda a vez que o código é iniciado o contadorDaPergunta recebe +1, porém o numeroDaPergunta ainda continua com seu valor anterior; Por exemplo, na primeira execução o contador começa como 0, pegando o primeiro objeto(pergunta) do arquivo JSON e exibindo em tela, na segunda execução começa com +1 e pega o segundo objeto(pergunta) e assim sucessivamente.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/0ce91499-184e-4519-bae4-108c3e76237a" width="650px">
		</div>
		&nbsp;
		<p>Seguindo, a variável perguntaSelecionada recebe o objeto com a pergunta para ser utilizado mais a frente no código. Para identificar que as perguntas acabaram e recomeçar o quiz, criei uma estrutura condicional utilizando a seguinte lógica: Se o número da pergunta for igual ao número de perguntas no arquivo json(jsonPerguntas), executa a função "recomecarQuiz" passando o href da página de recomeçar.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/cef755f1-212f-447e-ab63-0a0263982782" width="650px">
		</div>
	</article>
	<article>
		<h4>Função responderPergunta()</h4>
		<p>A função responderPergunta serve para pegar a resposta do usuário (verdadeiro ou falso) e comparar com a resposta da pergunta, acertando ou errando. Dependendo da resposta ela da um play em um efeito sonoro de errado ou correto.</p>
		<p>Para executar a função, primeiro fiz um forEach na variável botoesResposta onde para cada botão é adicionado um evento de clique que chama a função responderPergunta().</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/c69ef859-1b79-4434-b239-7a84c823946a" width="650px">
		</div>
		&nbsp;
		<p>Nela, primeiro peguei o valor do botão clicado. Fiz isso pegando o valor do atributo "data", onde o botão de verdadeiro possui o valor "true" e o de falso possui o valor "false"</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/8fe36cd5-0651-4a6e-8084-f33b4f2b5875" width="650px">
		</div>
		&nbsp;
		<p>Seguindo, é criado a variável conteinerDaPergunta que seleciona toda a section da pergunta. Depois, são criadas duas variáveis usando o construtor new Audio(), são elas: </p>
		<ul>
			<li><strong>somDeErrado</strong> - armazena o áudio que será tocado quando a reposta for incorreta.</li>
			<li><strong>somDeCorreto</strong> - armazena o áudio que será tocado quando a resposta for correta.</li>
		</ul>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/a96a1ce5-284a-453b-8d71-4193c5f051fa" width="650px">
		</div>
		&nbsp;
		<p>Para fazer a validação da resposta utilizei uma estrutura condicional, utilizando a seguinte condição: Se o valor do botão clicado for igual ao valor da resposta, primeiro remove a classe "respostaErrada" do conteiner, depois dá um ".play()" no audio de correto e executa novamente a função "colocarPergunta()" para seguir para a proxima pergunta. Se não, ou seja, se a reposta for errada adiciona a classe "respostaErrada" no conteiner e da um ".play()" no áudio de errado.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/e7c8c039-0a67-43ae-a3b5-fa6f7927583a" width="650px">
		</div>
	</article>
 	<artcle>
		<h4>Função recomecarQuiz()</h4>
		<p>A função recomecarQuiz serve para exibir a tela de recomaçar o quiz assim que a ultima pergunta for respondida. Ela é chamada na função colocarPergunta e tem como parâmetro o href da página HTML "paginaDeRecomecar". Sendo assim, é atribuido esse href no botão de verdadeiro. Quando é clicado, o código trocarDePagina é acionado trocando a página.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/Quiz-Javascript/assets/112639055/251287a6-8229-457e-8c54-cf16ef32ecfa" width="650px">
		</div>
	</artcle>
</section>





































