const positionEmail = document.querySelector('#email-header');
const positionPassword = document.querySelector('#password-header');
const positionButton = document.querySelector('#button-header');
const positionSubmit = document.querySelector('#submit-btn');
const positionCheckBox = document.querySelector('#agreement');

function verificaLogin() {
  if (positionEmail.value === 'tryber@teste.com' && positionPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function verificaChecked() {
  if (positionCheckBox.checked === true) {
    positionSubmit.removeAttribute('disabled');
  } else {
    positionSubmit.setAttribute('disabled', '');
  }
}

window.onload = function aplicacao() {
  positionButton.addEventListener('click', verificaLogin);
  positionCheckBox.addEventListener('click', verificaChecked);
};
