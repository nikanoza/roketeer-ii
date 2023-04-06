const yesRadioButton = document.querySelector('#yesRadioButton');

const container = document.querySelector('#container');


yesRadioButton.addEventListener('change', () => {
  if (yesRadioButton.checked) {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});