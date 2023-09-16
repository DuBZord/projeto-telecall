// VALIDAÇAO usuario //

const userInput = document.getElementById('user-login');
const usererrado = document.getElementById('user-error');
const usercerto = document.getElementById('user-success');

userInput.addEventListener('input', () => {
  const value = userInput.value.trim();

  if (value.length < 6) {
    userInput.classList.remove('is-valid');
    userInput.classList.add('is-invalid');
    usererrado.innerText = 'O campo deve conter exatamente 6 caracteres alfabéticos.';
    usercerto.innerText = '';
  } else if (!/^[A-Za-zÀ-ú\s]+$/.test(value)) {
    userInput.classList.remove('is-valid');
    userInput.classList.add('is-invalid');
    usererrado.innerText = 'O campo deve conter exatamente 6 caracteres alfabéticos.';
    usercerto.innerText = '';
  } else {
    userInput.classList.remove('is-invalid');
    userInput.classList.add('is-valid');
    usererrado.innerText = '';
    usercerto.innerText = 'Usuário Valido';
  }
});




// VALIDAÇAO usuario //


// VALIDAÇAO senha //

const senhaInput = document.getElementById('senha-login');
const senhaError = document.getElementById('senha-error');
const senhaSuccess = document.getElementById('senha-success');

function validarSenha() {
  const senha = senhaInput.value.trim();

  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-+]{8,}$/.test(senha)) {
    senhaInput.classList.add('is-invalid');
    senhaInput.classList.remove('is-valid');
    senhaError.innerText = 'A senha deve ter no mínimo 8 caracteres alfabéticos e pode incluir caracteres especiais.';
    senhaSuccess.innerText = '';
  } else {
    senhaInput.classList.remove('is-invalid');
    senhaInput.classList.add('is-valid');
    senhaError.innerText = '';
    senhaSuccess.innerText = 'Senha válida.';
  }
}

senhaInput.addEventListener('input', validarSenha);



// VALIDAÇAO senha //