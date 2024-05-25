function aplicarDesconto(livros) {
  const valorDesconto = 0.3;
  
  livrosComDesconto = livros.map(livro => {
    return { ...livro, preco: livro.preco - (livro.preco * valorDesconto)}
  });
  
  return livrosComDesconto;
}