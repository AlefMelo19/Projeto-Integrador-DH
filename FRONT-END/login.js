// Função para lidar com o envio do formulário de login
function handleLogin(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obter os valores dos campos de entrada
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Verificar se os campos estão preenchidos
  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Verificar a validade das credenciais de login
  // Aqui você pode adicionar a lógica para verificar as credenciais com um servidor ou banco de dados
  // Por enquanto, vou simular uma verificação simples
  if (email === 'usuario@example.com' && senha === 'senha123') {
    alert('Login bem-sucedido! Redirecionando para a página inicial...');
    window.location.href = 'pagina_inicial.html'; // Redirecionar para a página inicial após o login bem-sucedido
  } else {
    alert('Credenciais inválidas! Por favor, verifique seu email e senha.');
  }
}

// Obter referência ao formulário de login
var loginForm = document.getElementById('login-form');

// Adicionar um ouvinte de evento para o envio do formulário
loginForm.addEventListener('submit', handleLogin);
