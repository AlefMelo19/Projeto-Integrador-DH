document.addEventListener('DOMContentLoaded', function() {

  var form = document.getElementById('formulario');
  
   form.addEventListener('submit', function(event) {
      event.preventDefault(); 4
      var nome = document.getElementById('nome').value;
      var cpf = document.getElementById('cpf').value;
      var rg = document.getElementById('rg').value;
      var dataNascimento = document.getElementById('data-nascimento').value;
      var cep = document.getElementById('cep').value;
      var logradouro = document.getElementById('logradouro').value;
      var cidade = document.getElementById('cidade').value;
      var uf = document.getElementById('uf').value;
      var numero = document.getElementById('numero').value;
      var email = document.getElementById('email').value;
      var senha = document.getElementById('senha').value;
      var confirmarSenha = document.getElementById('confirmar-senha').value;
  
      // Realizar validações nos campos do formulário
      if (nome === '') {
        alert('Por favor, digite seu nome completo.');
        return;
      }
  
      if (cpf === '') {
        alert('Por favor, digite seu CPF.');
        return;
      }
  
      if (rg === '') {
        alert('Por favor, digite seu RG.');
        return;
      }
  
      if (dataNascimento === '') {
        alert('Por favor, digite sua data de nascimento.');
        return;
      }
  
      if (cep === '') {
        alert('Por favor, digite seu CEP.');
        return;
      }
  
      if (logradouro === '') {
        alert('Por favor, digite seu logradouro.');
        return;
      }
  
      if (cidade === '') {
        alert('Por favor, digite sua cidade.');
        return;
      }
  
      if (uf === '') {
        alert('Por favor, digite seu UF.');
        return;
      }
  
      if (numero === '') {
        alert('Por favor, digite o número do endereço.');
        return;
      }
  
      if (email === '') {
        alert('Por favor, digite seu email.');
        return;
      }
  
      if (senha === '') {
        alert('Por favor, digite uma senha.');
        return;
      }
  
      if (confirmarSenha === '') {
        alert('Por favor, confirme sua senha.');
        return;
      }
  
      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
      }
  
      // Realizar o envio do formulário se a validação for bem-sucedida
      alert('Formulário enviado com sucesso!');
      form.reset();
    });
  });
  