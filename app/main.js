let livros = [];
const urlAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
  const res = await fetch(urlAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto);
}

