const positionEmail = document.querySelector('#email-header');
const positionPassword = document.querySelector('#password-header');
const positionButton = document.querySelector('#button-header');
const positionSubmit = document.querySelector('#submit-btn');
const positionCheckBox = document.querySelector('#agreement');
const positionTextarea = document.querySelector('#textarea');
const valordeP = document.querySelector('#counter');

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

// Função que vai atribuir a contagem ao InnerHTML do contador
function contagemLimite() {
  // Subtrai do Limite estipulado de caracteres (500) o tamanho do texto digitado e adiciona ao innerHTML
  valordeP.innerHTML = positionTextarea.maxLength - positionTextarea.value.length;
}

window.onload = function aplicacao() {
  positionButton.addEventListener('click', verificaLogin);
  positionCheckBox.addEventListener('click', verificaChecked);
  // Nosso erro estava aqui: o evento era o Input
  positionTextarea.addEventListener('input', contagemLimite);
};
