const listaFilmes = document.getElementById("Lista-Filmes");
const mensagem = document.getElementById("mensagem");

function RenderizarFilmes(listas) {
    
const CardFilmes= listas.map(filme => {
    return `
    <div class="Card"> 
    <img src="${filme.imagem}">
    <h2 class="titulo"> ${filme.titulo} </h2>
    <p class="genero"> ${filme.genero} </p>
    <p class="nota"> ${filme.nota} </p>
    <p class="ano"> ${filme.ano} </p>
    <button class="favorito" data-id="${filme.id}"> ${filme.favorito ? "Favoritado" : "Favoritar"} </button>
    </div>

    
    
    `;
});
listaFilmes.innerHTML = CardFilmes.join("") ;

}
 RenderizarFilmes(filmes);



function AdicionarEventosFavoritos(params) {
    
const botoesFavorito = document.querySelectorAll(".favorito");

botoesFavorito.forEach(botao => {

botao.addEventListener("click", () => {

const filmeEncontrado = filmesAtuais.find(filme => {

      

    return  filme.id === Number(botao.dataset.id);

});
 filmeEncontrado.favorito =  !filmeEncontrado.favorito;
 localStorage.setItem(
    "favoritos",
    JSON.stringify(filmes)
);
 if (filmeEncontrado.favorito) {
    MostrarMensagem("⭐ Filme Favoritado!", "sucesso")
 } else {
       MostrarMensagem("❌ Filme Desfavoritado!", "erro")
 };
 RenderizarFilmes(filmesAtuais);
 AdicionarEventosFavoritos ();

});

});
}
function MostrarMensagem(texto, tipo){

    mensagem.textContent = texto;

    mensagem.className = "mensagem";

    mensagem.classList.add(tipo);

    mensagem.classList.add("mostrar");


    setTimeout(()=>{

        mensagem.classList.remove("mostrar");

    },3000);

}

AdicionarEventosFavoritos ();