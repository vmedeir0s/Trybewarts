const positionEmail = document.querySelector('#email-header');
const positionPassword = document.querySelector('#password-header');
const positionButton = document.querySelector('#button-header');
const positionSubmit = document.querySelector('#submit-btn');
const positionCheckBox = document.querySelector('#agreement');
const positionTextarea = document.querySelector('#textarea');
const valordeP = document.querySelector('#counter');
const positionForm = document.querySelector('#evaluation-form');

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

function contagemLimite() {
  valordeP.innerHTML = positionTextarea.maxLength - positionTextarea.value.length;
}

function checkRadio(value) {
  const families = document.querySelectorAll(value);
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) {
      return families[i].value;
    }
  }
}

function checkboxValues() {
  const arrayCheckbox = document.querySelectorAll('.subject');
  let text = 'Matérias: ';
  for (let i = 0; i < arrayCheckbox.length; i += 1) {
    if (arrayCheckbox[i].checked) {
      text += arrayCheckbox[i].value;
      text += ', ';
    }
  }
  return text;
}

function personalInformation() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const familia = checkRadio('#familia input[type=radio]');
  const subjects = checkboxValues();
  const rate = checkRadio('#rate input[type=radio]');
  const textarea = document.querySelector('#textarea').value;
  positionForm.innerHTML = '';
  positionForm.innerHTML += `Nome: ${name} ${lastName}<br>`;
  positionForm.innerHTML += `Email: ${email}<br>`;
  positionForm.innerHTML += `Casa: ${house}<br>`;
  positionForm.innerHTML += `Família: ${familia}<br>`;
  positionForm.innerHTML += `${subjects}<br>`;
  positionForm.innerHTML += `Avaliação: ${rate}<br>`;
  positionForm.innerHTML += `Observações: ${textarea}`;
}

window.onload = function aplicacao() {
  positionButton.addEventListener('click', verificaLogin);
  positionCheckBox.addEventListener('click', verificaChecked);
  positionTextarea.addEventListener('input', contagemLimite);
  positionSubmit.addEventListener('click', personalInformation);
};
