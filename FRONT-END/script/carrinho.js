function getURLParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

function preencherProduto() {
  const urlParams = getURLParams();
  const instrumento = urlParams.get("instrumento");
  const marca = urlParams.get("marca");
  const modelo = urlParams.get("modelo");
  const preco = urlParams.get("preco");
  const imagem = urlParams.get("imagem");

  document.getElementById("nomeInstrumento").innerText = "Instrumento: " + instrumento;
  document.getElementById("marcaProduto").innerText = "Marca: " + marca;
  document.getElementById("modeloProduto").innerText = "Modelo: " + modelo;
  document.getElementById("precoProduto").innerText = "Preço: " + preco;
  document.getElementById("imagemProduto").src = imagem;
}

window.onload = function() {
  preencherProduto();
};

