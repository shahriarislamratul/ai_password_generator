const btn = document.querySelector('#btn');
const password = document.querySelector('#inPutPass');
const passLengthInput = document.querySelector('#passLength');
const upperCheckbox = document.querySelector('#upper');
const lowerCheckbox = document.querySelector('#lower');
const numberCheckbox = document.querySelector('#number');
const symbolCheckbox = document.querySelector('#symbol');
const copyBtn = document.querySelector('#copyBtn');

function generateCode(length = 6) {
  const upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const lower = 'qwertyuiopasdfghjklzxcvbnm';
  const numbers = '0123456789';
  const symbols = '@#%&*!?$)(][}{<>_:;^°=≠£$';

  let phrase = '';

  if (upperCheckbox.checked) phrase += upper;
  if (lowerCheckbox.checked) phrase += lower;
  if (numberCheckbox.checked) phrase += numbers;
  if (symbolCheckbox.checked) phrase += symbols;

  if (phrase === '') {
    return 'Select at least one option';
  }

  let pass = '';
  for (let x = 0; x < length; x++) {
    pass += phrase[Math.floor(Math.random() * phrase.length)];
  }

  return pass;
}

btn.addEventListener('click', () => {
  const length = parseInt(passLengthInput.value);
  password.value = generateCode(length);
});

copyBtn.addEventListener('click', () => {
  password.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});
