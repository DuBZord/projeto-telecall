// Evento de envio do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtém os valores dos campos de login e senha
    var username = document.getElementById("user-login").value;
    var password = document.getElementById("senha-login").value;
  
    // Verifica se as informações de login são válidas
    if (loginUser(username, password)) {
      showModal("Sucesso", "Login realizado com sucesso!", redirectToDashboard);
    } else {
      // Se as informações de login não forem válidas, exibe uma mensagem de erro
      showModal("Erro", "Usuário ou senha inválidos.");
    }
  });
  
  // Evento de envio do formulário de cadastro
  document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtém os valores dos campos de login e senha
    var username = document.getElementById("user").value;
    var password = document.getElementById("senha").value;
  
    // Verifica se os campos estão vazios
    if (username === "" || password === "") {
      showModal("Erro", "Por favor, preencha todos os campos.");
    } else {
      // Salva as informações de login e senha
      saveLoginInfo(username, password);
      showModal("Sucesso", "Cadastro realizado com sucesso! Seus dados foram armazenados.", redirectToLogin);
    }
  });
  
  // Função para redirecionar o usuário para a página de dashboard (ou outra página de sua escolha)
  function redirectToDashboard() {
    window.location.href = "index.html";
  }
  
  // Função para redirecionar o usuário para a página de login
  function redirectToLogin() {
    window.location.href = "login.html";
  }
  
  // Função para exibir o modal com título, mensagem e função de callback
  function showModal(title, message, callback) {
    var modalTitle = document.getElementById("modal-title");
    var modalBody = document.getElementById("modal-body");
  
    modalTitle.textContent = title;
    modalBody.textContent = message;
  
    var messageModal = new bootstrap.Modal(document.getElementById("message-modal"));
  
    // Evento para redirecionar para a página de login quando o modal for fechado
    messageModal._element.addEventListener("hidden.bs.modal", function() {
      if (callback && typeof callback === "function") {
        callback();
      }
    });
  
    messageModal.show();
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
  
  // Função para verificar se as informações de login são válidas
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
  