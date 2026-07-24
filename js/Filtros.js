const InputPesquisa = document.getElementById("Barra-Pesquisa");
const botoesGenero = document.querySelectorAll(".botao-genero");
const mensagemNaoEncontrado = document.getElementById("Mensagem-NaoEncontrado");
let filmesAtuais = filmes;


botoesGenero.forEach(botao => {
    
botao.addEventListener("click", () => {

  const generoEscolhido = botao.dataset.genero;

if (generoEscolhido === "Todos") {
    filmesAtuais = filmes;
    RenderizarFilmes(filmes);
    AdicionarEventosFavoritos();

} else {
    const filmesFiltrados = filmes.filter(filme => {

            return filme.genero === generoEscolhido;

        });
        filmesAtuais = filmesFiltrados;
        RenderizarFilmes(filmesFiltrados);
         AdicionarEventosFavoritos ();
}

});

});

InputPesquisa.addEventListener("input", () => {

    const textoDigitado = InputPesquisa.value.toLowerCase();

    const filmesPesquisados = filmes.filter(filme => {

        return filme.titulo.toLowerCase().includes(textoDigitado);

    });

    if (filmesPesquisados.length === 0) {

        mensagemNaoEncontrado.classList.add("mostrar");

    } else {

        mensagemNaoEncontrado.classList.remove("mostrar");

    };

    filmesAtuais = filmesPesquisados;

    RenderizarFilmes(filmesPesquisados);
    AdicionarEventosFavoritos();

});
