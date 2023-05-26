window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nomeInstrumento = urlParams.get('nome');
  const marcaProduto = urlParams.get('marca');
  const modeloProduto = urlParams.get('modelo');
  const precoProduto = urlParams.get('preco');
  const imagemProduto = urlParams.get('imagem');
  const quantidadeProduto = urlParams.get('quantidade');

  const nomeInstrumentoElement = document.getElementById('nomeInstrumento');
  const marcaProdutoElement = document.getElementById('marcaProduto');
  const modeloProdutoElement = document.getElementById('modeloProduto');
  const precoTotalProdutoElement = document.getElementById('precoTotalProduto');
  const imagemProdutoElement = document.getElementById('imagemProduto');
  const quantidadeProdutoElement = document.getElementById('quantidadeProduto');

  nomeInstrumentoElement.textContent = nomeInstrumento;
  marcaProdutoElement.textContent = marcaProduto;
  modeloProdutoElement.textContent = modeloProduto;
  quantidadeProdutoElement.textContent = quantidadeProduto;
  imagemProdutoElement.src = imagemProduto;

  const precoTotal = parseFloat(precoProduto) * parseInt(quantidadeProduto);
  precoTotalProdutoElement.textContent = precoTotal.toFixed(2);
});
