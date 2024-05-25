const secaoLivros = document.getElementById('livros');
const containerLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros) {
  containerLivrosDisponiveis.innerHTML = '';
  secaoLivros.innerHTML = '';
  listaDeLivros.forEach(livros => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livros);
    let disponibilidade = livros.quantidade > 0 ? 'livro__imagens' : 'indisponivel';
    secaoLivros.innerHTML += `
      <div class="livro">
        <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.alt}" />
        <h2 class="livro__titulo">
          ${livros.titulo}
       </h2>
        <p class="livro__descricao">${livros.autor}</p>
        <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livros.categoria}</span>
        </div>
      </div>
    `;
  });
}

// function verificarDisponibilidadeDoLivro(livros) {
//   if (livros.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'indisponivel';
//   }
// }