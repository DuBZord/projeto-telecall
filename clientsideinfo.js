function loginUser(username, password) {
  // Obtém os registros de login do localStorage
  var loginRecords = getLoginRecords();

  // Percorre os registros e verifica se há uma correspondência com as informações fornecidas
  for (var i = 0; i < loginRecords.length; i++) {
    if (
      loginRecords[i].username === username &&
      loginRecords[i].password === password
    ) {
      return true; // Retorna true se houver correspondência
    }
  }

  return false; // Retorna false se não houver correspondência
}




function getLoginRecords() {
  // Verifica se o localStorage está disponível e se existem registros salvos
  if (typeof(Storage) !== "undefined" && localStorage.getItem("loginRecords")) {
    // Obtém os registros de login do localStorage e converte para um objeto JavaScript
    return JSON.parse(localStorage.getItem("loginRecords"));
  } else {
    // Se não houver registros, retorna um array vazio
    return [];
  }
}

// Função para salvar as informações de login e senha no localStorage
function saveLoginInfo(username, password) {
  // Obtém os registros de login existentes
  var loginRecords = getLoginRecords();

  // Adiciona um novo registro ao array
  loginRecords.push({
    username: username,
    password: password
  });

  // Salva os registros atualizados no localStorage
  localStorage.setItem("loginRecords", JSON.stringify(loginRecords));

}

// Função para exibir uma mensagem de sucesso
function showSuccessMessage() {
  // Obtém o elemento <span> para exibir a mensagem
  var successMessage = document.getElementById("success-message");

  // Define o texto da mensagem de sucesso
  successMessage.innerTextContent = "Sucesso!";
  // Ou você pode usar successMessage.innerHTML = "Cadastro realizado com sucesso! Seus dados foram armazenados.";
}

// Evento de envio do formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos de login e senha
  var username = document.getElementById("user").value;
  var password = document.getElementById("senha").value;

  // Salva as informações de login e senha
  saveLoginInfo(username, password);
  redirectToLogin();
  
});

// Função para redirecionar o usuário para a página de login
function redirectToLogin() {
  window.location.href = "login.html";
}