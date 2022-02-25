let positionEmail = document.querySelector('#email-header');
let positionPassword = document.querySelector('#password-header');
let positionButton = document.querySelector('#button-header');

function verificaLogin() {
  if (positionEmail.value === 'tryber@teste.com' && positionPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

window.onload = function aplicacao() {
  positionButton.addEventListener('click', verificaLogin);
};
