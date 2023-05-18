const images = document.querySelectorAll('.zoomable');

images.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});

function adicionarAoCarrinho(instrumento, marca, modelo, preco) {
  document.cookie = "nomeInstrumento=" + encodeURIComponent(instrumento);
  document.cookie = "marcaProduto=" + encodeURIComponent(marca);
  document.cookie = "modeloProduto=" + encodeURIComponent(modelo);
  document.cookie = "precoProduto=" + encodeURIComponent(preco);
  
  window.location.href = "carrinho.html";
}

  