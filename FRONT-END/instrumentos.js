const images = document.querySelectorAll('.zoomable');

images.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});

function adicionarAoCarrinho(nome, marca, modelo, preco) {
    console.log("Produto adicionado ao carrinho:");
    console.log("Nome:", nome);
    console.log("Marca:", marca);
    console.log("Modelo:", modelo);
    console.log("Preço:", preco);
  
    window.location.href = "pagina-do-carrinho.html";
  }
  