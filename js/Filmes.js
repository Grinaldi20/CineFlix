const  filmes = [

{
id : 1,    
titulo: "Kung fu Panda",
ano : 2009,
genero: "Comédia",
nota: 9.8,
favorito: false,
imagem : "Imagens/Kung.png",
},

{
id : 2,    
titulo: "Shrek",
ano : 2004,
genero: "Comédia",
nota: 10,
favorito: false,
imagem : "Imagens/Sherek.png",
},

{
id : 3,    
titulo: "Sorria",
ano : 2020,
genero: "Terror",
nota: 8.9,
favorito: false,
imagem : "Imagens/Sorria.png",
},

{
id : 4,    
titulo: "Sorria 2",
ano : 2022,
genero: "Terror",
nota: 7.9,
favorito: false,
imagem : "Imagens/Sorria2.png",
},

{

id : 5,    
titulo: "Senhor Dos Aneis",
ano : 1998,
genero: "Ficção",
favorito: false,
nota: 9.2,
imagem : "Imagens/Senhor.png",
},

{
id : 6,    
titulo: "As Duas Torres",
ano : 2000,
favorito: false,
genero: "Ficção",
nota: 9.6,
imagem : "Imagens/Senhor2.png",
},

{
id : 7,    
titulo: "Titanic",
ano : 1996,
genero: "Drama",
favorito: false,
nota: 9.9,
imagem : "Imagens/Titanic.png",
},

{
id : 8,    
titulo: "Extraordinario",
ano : 2018,
genero: "Drama",
favorito: false,
nota: 9.9,
imagem : "Imagens/Extraordinario.png",
},

{
id : 9,    
titulo: "Velozes e Furiosos",
ano : 2004,
genero: "Ação",
favorito: false,
nota: 9.0,
imagem : "Imagens/Velozes.png",
},

{
id : 10,    
titulo: "Velozes e Furiosos",
ano : 2007,
genero: "Ação",
favorito: false,
nota: 9.8,
imagem : "Imagens/Velozes2.png",
},

];

const favoritosSalvos = localStorage.getItem("favoritos");


if (favoritosSalvos) {

    const favoritos = JSON.parse(favoritosSalvos);


    filmes.map(filme => {

        const filmeSalvo = favoritos.find(filmeFavorito => {

            return filmeFavorito.id === filme.id;

        });


        if (filmeSalvo) {

            filme.favorito = filmeSalvo.favorito;

        }

    });

}