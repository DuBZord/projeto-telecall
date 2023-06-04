// VALIDAÇAO CPF //

const cpfInput = document.querySelector('#cpfInput');

cpfInput.addEventListener('input', () => {
  let cpf = cpfInput.value;
  cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (cpf.length > 11) {
    cpf = cpf.slice(0, 11); // Limita o comprimento máximo para 11 dígitos
  }

  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o ponto após o terceiro dígito
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o ponto após o sexto dígito
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen antes dos últimos dois dígitos

  cpfInput.value = cpf;
});

// VALIDAÇAO CPF //



// VALIDAÇAO NOME MATERNO E NOME COMPLETO //

const nomeCompletoInput = document.getElementById('nomecompleto');
const nomecompletoerrado = document.getElementById('nomecompleto-error');
const nomecompletocerto = document.getElementById('nomecompleto-success');

nomeCompletoInput.addEventListener('input', () => {
  const value = nomeCompletoInput.value.trim();

  if (!/^[A-Za-zÀ-ú\s]+$/.test(value)) {
    nomeCompletoInput.classList.add('is-invalid');
    nomeCompletoInput.classList.remove('is-valid');
    nomecompletoerrado.innerText = 'O campo deve conter de 15 a 60 caracteres e somente caracteres alfabéticos..';
    nomecompletocerto.innerText = '';
  } else if (value.length < 15 || value.length > 60) {
    nomeCompletoInput.classList.add('is-invalid');
    nomeCompletoInput.classList.remove('is-valid');
    nomecompletoerrado.innerText = 'O campo deve conter de 15 a 60 caracteres e somente caracteres alfabéticos.';
    nomecompletocerto.innerText = '';
  } else {
    nomeCompletoInput.classList.remove('is-invalid');
    nomeCompletoInput.classList.add('is-valid');
    nomecompletoerrado.innerText = '';
  }
});


const nomeMaeInput = document.getElementById('nomemae');
const maeerrado = document.getElementById('nomemae-error');
const maecerto = document.getElementById('nomemae-success');

nomeMaeInput.addEventListener('input', () => {
  const value = nomeMaeInput.value.trim();

  if (!/^[A-Za-zÀ-ú\s]+$/.test(value)) {
    nomeMaeInput.classList.add('is-invalid');
    nomeMaeInput.classList.remove('is-valid');
    maeerrado.innerText = 'O campo deve conter de 15 a 60 caracteres e somente caracteres alfabéticos.';
    maecerto.innerText = '';
  } else if (value.length < 15 || value.length > 60) {
    nomeMaeInput.classList.add('is-invalid');
    nomeMaeInput.classList.remove('is-valid');
    maeerrado.innerText = 'O campo deve conter de 15 a 60 caracteres e somente caracteres alfabéticos.';
    nomecompletocerto.innerText = '';
  }else {
    nomeMaeInput.classList.remove('is-invalid');
    nomeMaeInput.classList.add('is-valid');
    maeerrado.innerText = '';
  
  }
});

// VALIDAÇAO NOME MATERNO E NOME COMPLETO //

// VALIDAÇAO usuario //

const userInput = document.getElementById('user');
const errorContainer = document.getElementById('user-error');
const successContainer = document.getElementById('user-success');

userInput.addEventListener('input', () => {
  const value = userInput.value.trim();

  if (!/^[A-Za-zÀ-ú\s]+$/.test(value)) {
    userInput.classList.add('is-invalid');
    userInput.classList.remove('is-valid');
    errorContainer.innerText = 'O campo deve conter exatamente 6 caracteres alfabéticos.';
    successContainer.innerText = '';
  } else {
    userInput.classList.remove('is-invalid');
    userInput.classList.add('is-valid');
    errorContainer.innerText = '';
  }
});






