// Evento de envio do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos de login e senha
  var username = document.getElementById("user-login").value;
  var password = document.getElementById("senha-login").value;

  // Verifica se as informações de login são válidas
  if (loginUser(username, password)) {
    redirectToDashboard(); // Redireciona o usuário para a página de dashboard (ou outra página de sua escolha)
  } else {
    // Se as informações de login não forem válidas, exibe uma mensagem de erro
    var loginMessage = document.getElementById("login-message");
    loginMessage.textContent = "Usuário ou senha inválidos.";
    loginMessage.style.display = "block";
  }
});

// Função para redirecionar o usuário para a página de dashboard
function redirectToDashboard() {
  window.location.href = "index.html"; // Substitua "dashboard.html" pelo caminho da página de dashboard (ou outra página de sua escolha)
}