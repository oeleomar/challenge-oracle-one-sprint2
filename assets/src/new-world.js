import { data } from './data.js';

const button = document.querySelector('#save-word');
const inputText = document.querySelector('#new-word-input');

const textVerify = (text) => {
  const hasAcento = (str) => /[^a-zA-Z]/.test(str);
  return hasAcento(text);
}


button.addEventListener('click', (e) => {
  const text = inputText.value;
  inputText.value = '';
  if(text.length <= 0 || text.length > 8){
    e.preventDefault();
    return alert('Palavra precisa conter entre 1 a 8 caracteres.')
  }
  const validator = textVerify(text);
  if(validator) {
    e.preventDefault();
    return alert("Palavra não pode conter acentos ou espaços");
  }
  const newString = text.toUpperCase();

  data.push(newString);

  const jsonData = JSON.stringify(data)
  localStorage.setItem('data', jsonData);
})