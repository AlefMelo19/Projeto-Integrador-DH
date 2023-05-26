function adicionarAoCarrinho(instrumento, marca, modelo, preco, imagem, button) {
  const quantidadeInput = button.previousElementSibling;
  const quantidade = quantidadeInput.value;

  const urlParams = new URLSearchParams();
  urlParams.append('nome', instrumento);
  urlParams.append('marca', marca);
  urlParams.append('modelo', modelo);
  urlParams.append('preco', preco);
  urlParams.append('imagem', imagem);
  urlParams.append('quantidade', quantidade);

  const url = `carrinho.html?${urlParams.toString()}`;
  window.location.href = url;
}
