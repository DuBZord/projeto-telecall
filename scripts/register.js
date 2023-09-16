// VALIDAÇAO CPF //

const cpfInput = document.querySelector('#cpfInput');
const cpfError = document.getElementById('cpf-error');
const cpfSuccess = document.getElementById('cpf-success');

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

  if (cpf.length === 14 && isValidCPF(cpf)) {
    cpfInput.classList.remove('is-invalid');
    cpfInput.classList.add('is-valid');
    cpfError.innerText = '';
    cpfSuccess.innerText = 'CPF validado com sucesso.';
  } else {
    cpfInput.classList.remove('is-valid');
    cpfInput.classList.add('is-invalid');
    cpfError.innerText = 'CPF inválido. Informe um CPF válido no formato XXX.XXX.XXX-XX.';
    cpfSuccess.innerText = '';
  }
});

function isValidCPF(cpf) {
  const cpfNumbers = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (cpfNumbers.length !== 11) {
    return false; // CPF deve ter exatamente 11 dígitos numéricos
  }
  const cpfArray = cpfNumbers.split('').map(Number); // Converte os dígitos do CPF em um array numérico

  // Verifica se todos os dígitos são iguais
  if (cpfArray.every(digit => digit === cpfArray[0])) {
    return false; // CPF com todos os dígitos iguais é inválido
  }

  // Verificação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += cpfArray[i] * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10) {
    remainder = 0;
  }
  if (remainder !== cpfArray[9]) {
    return false; // Primeiro dígito verificador inválido
  }

  // Verificação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpfArray[i] * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10) {
    remainder = 0;
  }
  if (remainder !== cpfArray[10]) {
    return false; // Segundo dígito verificador inválido
  }

  return true; // CPF válido
}


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
    maecerto.innerText = '';
  }else {
    nomeMaeInput.classList.remove('is-invalid');
    nomeMaeInput.classList.add('is-valid');
    maeerrado.innerText = '';
  
  }
});

// VALIDAÇAO NOME MATERNO E NOME COMPLETO //

// VALIDAÇAO usuario //

const userInput = document.getElementById('user');
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
    usercerto.innerText = 'Usuário Validado com sucesso.';
  }
});




// VALIDAÇAO usuario //


// VALIDAÇAO email //

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const emailSuccess = document.getElementById('email-success');

emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();

  // Expressão regular para validar o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');
    emailError.innerText = 'Insira um endereço de email válido.';
    emailSuccess.innerText = '';
  } else {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    emailError.innerText = '';
    emailSuccess.innerText = 'Email válido.';
  }
});

// VALIDAÇAO email //

// VALIDAÇAO senha //

const senhaInput = document.getElementById('senha');
const senha2Input = document.getElementById('senha2');
const senhaError = document.getElementById('senha-error');
const senhaSuccess = document.getElementById('senha-success');
const senha2Error = document.getElementById('senha2-error');
const senha2Success = document.getElementById('senha2-success');

function validarSenhas() {
  const senha = senhaInput.value.trim();
  const senha2 = senha2Input.value.trim();

  if (senha !== senha2) {
    senhaInput.classList.add('is-invalid');
    senha2Input.classList.add('is-invalid');
    senhaInput.classList.remove('is-valid');
    senha2Input.classList.remove('is-valid');
    senhaError.innerText = 'As senhas não correspondem.';
    senhaSuccess.innerText = '';
    senha2Error.innerText = 'As senhas não correspondem.';
    senha2Success.innerText = '';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-+]{8,}$/.test(senha)) {
    senhaInput.classList.add('is-invalid');
    senha2Input.classList.add('is-invalid');
    senhaInput.classList.remove('is-valid');
    senha2Input.classList.remove('is-valid');
    senhaError.innerText = 'A senha deve ter no mínimo 8 caracteres alfabéticos e pode incluir caracteres especiais.';
    senhaSuccess.innerText = '';
    senha2Error.innerText = 'A senha deve ter no mínimo 8 caracteres alfabéticos e pode incluir caracteres especiais.';
    senha2Success.innerText = '';
  } else {
    senhaInput.classList.remove('is-invalid');
    senha2Input.classList.remove('is-invalid');
    senhaInput.classList.add('is-valid');
    senha2Input.classList.add('is-valid');
    senhaError.innerText = '';
    senhaSuccess.innerText = 'Senhas correspondentes e válidas.';
    senha2Error.innerText = '';
    senha2Success.innerText = 'Senhas correspondentes e válidas.';
  }
}

senhaInput.addEventListener('input', validarSenhas);
senha2Input.addEventListener('input', validarSenhas);


// VALIDAÇAO senha //


// VALIDAÇAO data de nascimento //

const nascimentoInput = document.getElementById('Nascimento');
const nascimentoError = document.getElementById('nascimento-error');
const nascimentoSuccess = document.getElementById('nascimento-success');

nascimentoInput.addEventListener('input', () => {
  const dataNascimento = new Date(nascimentoInput.value);
  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();

  if (idade >= 18 && idade <= 90) {
    nascimentoInput.classList.remove('is-invalid');
    nascimentoInput.classList.add('is-valid');
    nascimentoError.innerText = '';
    nascimentoSuccess.innerText = 'Idade válida.';
  } else {
    nascimentoInput.classList.remove('is-valid');
    nascimentoInput.classList.add('is-invalid');
    nascimentoError.innerText = 'Idade inválida. Informe uma idade entre 18 e 90 anos.';
    nascimentoSuccess.innerText = '';
  }

  // Verifica se a idade é maior ou igual a 18
  if (idade < 18) {
    nascimentoInput.classList.remove('is-valid');
    nascimentoInput.classList.add('is-invalid');
    nascimentoError.innerText = 'Idade mínima para registro é de 18 anos.';
    nascimentoSuccess.innerText = '';
  }
});

// VALIDAÇAO data de nascimento //

// VALIDAÇAO celular  //


const celularInput = document.getElementById('phone');
const celularError = document.getElementById('celular-error');
const celularSuccess = document.getElementById('celular-success');
const celularError2 = document.getElementById('celular-error');

celularInput.addEventListener('input', (event) => {
  const telefone = celularInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (telefone.length > 11) {
    celularInput.value = celularInput.value.slice(0, 15); // Limita o comprimento máximo para 15 caracteres
  }

  const formattedNumber = maskPhoneNumber(telefone); // Aplica a máscara

  celularInput.value = formattedNumber;

  // Verifica se o número de telefone é válido
  const regexValidacao = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
  const telefoneValido = regexValidacao.test(formattedNumber);

  if (telefoneValido) {
    celularInput.classList.remove('is-invalid');
    celularInput.classList.add('is-valid');
    celularError.innerText = '';
    celularSuccess.innerText = 'Número de telefone validado com sucesso.';
  } else {
    celularInput.classList.remove('is-valid');
    celularInput.classList.add('is-invalid');
    celularError.innerText = 'Número de telefone inválido. Informe um número válido no formato (21) XXXXX-XXXX.';
    celularSuccess.innerText = '';
  }
});

celularInput.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    celularInput.value = '';
  }
});

const maskPhoneNumber = (value) => {
  if (!value) return '';

  const countryCode = '+55 ';
  const dddLength = 2;

  value = value.replace(/[\D]/g, '');

  let formattedNumber = value;

  if (value.length > dddLength) {
    formattedNumber = value.replace(/(\d{2})/, '($1) '); // Adiciona os parênteses no DDD
  }

  if (value.length >= dddLength + 5) {
    formattedNumber = formattedNumber.replace(/(\d{5})/, '$1-'); // Adiciona o hífen após o quinto número
  }

  if (value.length >= dddLength + 9) {
    formattedNumber = countryCode + formattedNumber; // Adiciona o código de país
  }

  return formattedNumber;
};




// VALIDAÇAO celular  //
  



// VALIDAÇAO telefone fixo  //

const maskTelefoneFixoNumber = (value) => {
    if (!value) return '';
  
    const countryCode = '+55 ';
    const dddLength = 2;
  
    value = value.replace(/[\D]/g, '');
  
    let formattedNumber = value;
  
    if (formattedNumber.startsWith(countryCode)) {
      formattedNumber = formattedNumber.slice(countryCode.length); // Remove o código de país, se estiver presente
    }
  
    if (value.length > dddLength + 7) {
      formattedNumber = countryCode + formattedNumber; // Adiciona o código de país antes do número de telefone
    }
  
    if (value.length >= dddLength + 2) {
      formattedNumber = formattedNumber.replace(/(\d{2})(\d)/, '($1) $2'); // Adiciona os parênteses no DDD
    }
  
    if (value.length >= dddLength + 6) {
      formattedNumber = formattedNumber.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona o hífen após o quarto número
    }
  
    if (formattedNumber.length > 18) {
      formattedNumber = formattedNumber.slice(0, 18); // Limita o número a 18 dígitos
    }
  
    return formattedNumber;
  };
  
  const applyTelefoneFixoNumberMask = (input) => {
    const formattedNumber = maskTelefoneFixoNumber(input.value);
    input.value = formattedNumber;
  
    const telefoneLength = formattedNumber.replace(/\D/g, '').length;
    const errorSpan = document.getElementById('telfixo-error');
    const successSpan = document.getElementById('telfixo-success');
  
    if (telefoneLength >= 12) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      errorSpan.innerText = '';
      successSpan.innerText = 'Número de telefone válido.';
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      errorSpan.innerText = 'Número de telefone inválido. Informe um número com pelo menos 10 dígitos. DDD + digitos';
      successSpan.innerText = '';
    }
  };


  const inputField = document.getElementById('telfixo');

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    const errorSpan = document.getElementById('telfixo-error');
    const successSpan = document.getElementById('telfixo-success');

    inputField.value = '';
    inputField.classList.remove('is-valid');
    inputField.classList.remove('is-invalid');
    errorSpan.innerText = '';
    successSpan.innerText = '';
  }
});
  
  // VALIDAÇAO telefone fixo  //