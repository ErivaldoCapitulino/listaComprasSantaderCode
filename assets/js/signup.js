const btn = document.querySelector('#verSenha');
const btnConfirm = document.querySelector('#verConfirmSenha');


const nome = document.querySelector('#nome');
const labelNome = document.querySelector('#labelNome');
let validNome = false;

const usuario = document.querySelector('#usuario');
const labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

const email = document.querySelector("#email");
const labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

const senha = document.querySelector('#senha');
const labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

const confirmSenha = document.querySelector('#confirmSenha');
const labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

const dataNascimento = document.querySelector("#dataNascimento");
const labelDataNascimento = document.querySelector("#labelDataNascimento");
let validDataNascimento = false;

const cpf = document.querySelector("#cpf");
const labelCpf = document.querySelector("#labelCpf");
let validCpf = false;

const cep = document.querySelector("#cep");
const labelCep = document.querySelector("#labelCep");
let validCep = false;

const logradouro = document.querySelector("#logradouro");
const labelLogradouro = document.querySelector("#labelLogradouro");
let validLogradouro = false;

const cidade = document.querySelector("#cidade");
const labelCidade = document.querySelector("#labelCidade");
let validCidade = false;

const estado = document.querySelector("#estado");
const labelEstado = document.querySelector("#labelEstado");
let validEstado = false;

const msgError = document.querySelector('#msgError');
const msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres';
    nome.setAttribute('style', 'border-color: red');
    validNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green');
    labelNome.innerHTML = 'Nome';
    nome.setAttribute('style', 'border-color: green');
    validNome = true;
  }
})

usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red');
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres';
    usuario.setAttribute('style', 'border-color: red');
    validUsuario = false;
  } else {
    labelUsuario.setAttribute('style', 'color: green');
    labelUsuario.innerHTML = 'Usuário';
    usuario.setAttribute('style', 'border-color: green');
    validUsuario = true;
  }
});


email.addEventListener('keyup', () => {
  if (email.value.length <= 4) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'Email *Insira no minimo 5 caracteres';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'Email';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
});


senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
});

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red');
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.setAttribute('style', 'border-color: red');
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.setAttribute('style', 'border-color: green');
    validConfirmSenha = true;
  }
});

dataNascimento.addEventListener('keyup', () => {
  if (dataNascimento.value === "") {
    labelDataNascimento.setAttribute('style', 'color: red');
    labelDataNascimento.innerHTML = 'Data aniversário *Insira a data completa';
    dataNascimento.setAttribute('style', 'border-color: red');
    validDataNascimento = false;
  } else {
    labelDataNascimento.setAttribute('style', 'color: green');
    labelDataNascimento.innerHTML = 'Data aniversário';
    dataNascimento.setAttribute('style', 'border-color: green');
    validDataNascimento = true;
  }
});


cpf.addEventListener('keyup', () => {
  if (cpf.value.length < 11) {
    labelCpf.setAttribute('style', 'color: red');
    labelCpf.innerHTML = 'CPF *Insira no minimo 11 caracteres';
    cpf.setAttribute('style', 'border-color: red');
    validCpf = false;
  } else {
    labelCpf.setAttribute('style', 'color: green');
    labelCpf.innerHTML = 'CPF';
    cpf.setAttribute('style', 'border-color: green');
    validCpf = true;
  }
});

cep.addEventListener('keyup', () => {
  if (cep.value.length < 8) {
    labelCep.setAttribute('style', 'color: red');
    labelCep.innerHTML = 'CEP *Insira no minimo 8 caracteres';
    cep.setAttribute('style', 'border-color: red');
    validCep = false;
  } else {
    labelCep.setAttribute('style', 'color: green');
    labelCep.innerHTML = 'CEP';
    cep.setAttribute('style', 'border-color: green');
    validCep = true;
  }
});

logradouro.addEventListener('keyup', () => {
  if (logradouro.value.length < 2) {
    labelLogradouro.setAttribute('style', 'color: red');
    labelLogradouro.innerHTML = 'Logradouro *Insira no minimo 2 caracteres';
    logradouro.setAttribute('style', 'border-color: red');
    validLogradouro = false;
  } else {
    labelLogradouro.setAttribute('style', 'color: green');
    labelLogradouro.innerHTML = 'Logradouro';
    logradouro.setAttribute('style', 'border-color: green');
    validLogradouro = true;
  }
});

cidade.addEventListener('keyup', () => {
  if (cidade.value.length < 2) {
    labelCidade.setAttribute('style', 'color: red');
    labelCidade.innerHTML = 'Cidade *Insira no minimo 2 caracteres';
    cidade.setAttribute('style', 'border-color: red');
    validCidade = false;
  } else {
    labelCidade.setAttribute('style', 'color: green');
    labelCidade.innerHTML = 'Cidade';
    cidade.setAttribute('style', 'border-color: green');
    validCidade = true;
  }
});

estado.addEventListener('keyup', () => {
  if (estado.value.length < 2) {
    labelEstado.setAttribute('style', 'color: red');
    labelEstado.innerHTML = 'Estado *Insira no minimo 8 caracteres';
    logradouro.setAttribute('style', 'border-color: red');
    validEstado = false;
  } else {
    labelEstado.setAttribute('style', 'color: green');
    labelEstado.innerHTML = 'Estado';
    estado.setAttribute('style', 'border-color: green');
    validEstado = true;
  }
});

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        emailCad: email.value,
        senhaCad: senha.value,
        dataNascimentoCad: dataNascimento.value,
        cpfCad: cpf.value,
        cepCad: cep.value,
        logradouroCad: logradouro.value,
        cidadeCad: cidade.value,
        estadoCad: estado.value
      }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser));


    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';

    setTimeout(() => {
      window.location.href = '../../index.html';
    }, 3000);


  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
  }
}

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha');

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
});