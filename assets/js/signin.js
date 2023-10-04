const btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
  const inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})


function entrar() {
  const usuario = document.querySelector('#usuario');
  const userLabel = document.querySelector('#userLabel');
  const senha = document.querySelector('#senha');
  const senhaLabel = document.querySelector('#senhaLabel');
  const msgError = document.querySelector('#msgError');

  const listaUser = JSON.parse(localStorage.getItem('listaUser')) || []; // Initialize as an empty array if there's no data

  if (!usuario.value || !senha.value) {
    // Check if either username or password is empty
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Por favor, preencha todos os campos.';
    usuario.focus();
  } else {
    let userValid = null;
    for (const item of listaUser) {
      if (usuario.value === item.userCad && senha.value === item.senhaCad) {
        userValid = {
          nome: item.nomeCad,
          user: item.userCad,
          senha: item.senhaCad
        };
        break;
      }
    }

    if (userValid) {
      window.location.href = '../../lista.html';

      const mathRandom = Math.random().toString(16).substr(2);
      const token = mathRandom + mathRandom;

      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Usuário ou senha incorretos';
      usuario.focus();
    }
  }
}
