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

<h3>Troca de página</h3>
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
</section>






















