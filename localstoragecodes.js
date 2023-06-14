// Evento de envio do formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos de login e senha
  var username = document.getElementById("user").value;
  var password = document.getElementById("senha").value;

  // Salva as informações de login e senha
  saveLoginInfo(username, password);
});

// Função para salvar as informações de login e senha no localStorage
function saveLoginInfo(username, password) {
  // Verifica se o localStorage está disponível
  if (typeof(Storage) !== "undefined") {
    // Obtém os registros de login existentes
    var loginRecords = getLoginRecords();

    // Adiciona um novo registro ao array
    loginRecords.push({
      username: username,
      password: password
    });

    // Salva os registros atualizados no localStorage
    localStorage.setItem("loginRecords", JSON.stringify(loginRecords));

    // Exibe uma mensagem de sucesso usando o Sweet Alert
    Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: "Cadastro realizado com sucesso! Seus dados foram armazenados.",
      showConfirmButton: false,
      timer: 3000
    }).then(function() {
      // Redireciona o usuário para a página de login após a mensagem de sucesso
      redirectToLogin();
    });
  } else {
    // Se o localStorage não estiver disponível, exibe uma mensagem de erro usando o Sweet Alert
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Ocorreu um erro ao salvar os dados de cadastro. Por favor, tente novamente.",
      showConfirmButton: false,
      timer: 2000
    });
  }
}

// Função para redirecionar o usuário para a página de login
function redirectToLogin() {
  window.location.href = "login.html";
}

// Função para obter os registros de login do localStorage
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
