// Verifica o status de login ao carregar a página
window.addEventListener("load", function() {
    var isLoggedIn = getUserLoggedIn();
  
    // Oculta o botão "btn-login" se o usuário estiver logado
    var btnLogin = document.getElementById("btn-login");
    if (isLoggedIn) {
      btnLogin.style.opacity = "0";
    } else {
      btnLogin.style.opacity = "1";
    }
  
    // Define a opacidade e a exibição do botão "btn-logout" com base no status de login
    var btnLogout = document.getElementById("btn-logout");
    if (isLoggedIn) {
      btnLogout.style.opacity = "1";
      btnLogout.style.display = "block";
    } else {
      btnLogout.style.opacity = "0";
      btnLogout.style.display = "none";
    }
  });
  
  // Evento de clique no botão de logout em qualquer página
  document.getElementById("btn-logout").addEventListener("click", function() {
    // Remove o status de login do localStorage
    setUserLoggedIn(false);
  
    // Redireciona o usuário para a página de login
    redirectToLogin();
  });
  
  // Função para redirecionar o usuário para a página de login
  function redirectToLogin() {
    window.location.href = "login.html";
  }
  
  // Função para definir o status de login do usuário no localStorage
  function setUserLoggedIn(isLoggedIn) {
    // Verifica se o localStorage está disponível
    if (typeof(Storage) !== "undefined") {
      // Salva o status de login no localStorage
      localStorage.setItem("isLoggedIn", isLoggedIn);
    }
  }
  
  // Função para obter o status de login do usuário do localStorage
  function getUserLoggedIn() {
    // Verifica se o localStorage está disponível
    if (typeof(Storage) !== "undefined") {
      // Obtém o status de login do localStorage
      var isLoggedIn = localStorage.getItem("isLoggedIn");
  
      // Retorna true se o status for "true", caso contrário, retorna false
      return isLoggedIn === "true";
    }
  
    return false; // Retorna false se o localStorage não estiver disponível
  }
  