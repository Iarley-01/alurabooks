const botoesFiltro = document.querySelectorAll('.btn');

botoesFiltro.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorLivrosDisponiveis(livrosFiltrados);
    exibirContainerLivrosDisponiveis(valorTotal);
  }
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function exibirContainerLivrosDisponiveis(valorTotal) {
  containerLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$ ${valorTotal}</span></p>
    </div>
  `;
}