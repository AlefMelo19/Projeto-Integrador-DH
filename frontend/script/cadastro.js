document.addEventListener('DOMContentLoaded', function() {
  var cepInput = document.getElementById('cep');
  var logradouroInput = document.getElementById('logradouro');
  var cidadeInput = document.getElementById('cidade');
  var ufInput = document.getElementById('uf');

  cepInput.addEventListener('blur', function() {
    var cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var endereco = JSON.parse(xhr.responseText);

        if (endereco.hasOwnProperty('erro')) {
          alert('CEP não encontrado.');
        } else {
          logradouroInput.value = endereco.logradouro;
          cidadeInput.value = endereco.localidade;
          ufInput.value = endereco.uf;
        }
      } else {
        alert('Erro ao consultar o CEP.');
      }
    };
    xhr.send();
  });
});
