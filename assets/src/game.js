const textContainer = document.querySelector("#text-container");
const errorContainer = document.querySelector("#error-container");
const resultContainer = document.querySelector("#result-container");
const imageContainer = document.querySelectorAll('.hidden');
const words = JSON.parse(localStorage.getItem('data'));

let counter = 0;
const usedLetters = [];
const errorLetters = [];
const correctLetters = [];

const initGame = (e) => {
  if(e.keyCode > 90 || e.keyCode < 60) return;
  
  const key = e.key.toUpperCase();

  letterVerify(key);
}

const sortWord = (words) => {
  const index = parseInt(Math.random() * words.length);
  return words[index];
}

const placeLetters = (word) => {
  for(const letter of word){
    const paragraph = document.createElement('p');
    paragraph.classList.add('input-letter');
    paragraph.innerText = '';
    textContainer.appendChild(paragraph);
  }
}

const letterVerify = (letter) => {
  const validator = verifyLetter(letter);
  if(validator) return;

  usedLetters.push(letter);
  for(let i = 0; i < word.length; i++){
    if(letter === word[i]){
      textContainer.childNodes[i + 1].textContent = letter;
      counter ++;
      correctLetters.push(letter);
    }  
  }
  
  usedLetters.map(val => {
    if(correctLetters.includes(val)) return;
    if(errorLetters.includes(val)) return;
    errorLetters.push(val);
    showIncorrectLetters(val);
  })
  checkWinner();
}

const verifyLetter = (letter) => {
  return usedLetters.includes(letter);
}


const checkWinner = () => {
  if(word.length <= correctLetters.length){
    const span = document.createElement('span');
    span.classList.add('winner');
    span.textContent = 'Voce conseguiu, parabens !! 😀😀';
    resultContainer.appendChild(span);
    document.removeEventListener('keydown', initGame);
  }else if(errorLetters.length >= 5) {
    const span = document.createElement('span');
    span.classList.add('looser');
    span.textContent = 'Voce perdeu, tente novamente. 🥺🥺';
    resultContainer.appendChild(span);
    document.removeEventListener('keydown', initGame);
  }
}

const showIncorrectLetters = (val) => {
  const span = document.createElement('span');
  span.classList.add('errors');
  span.textContent = val;
  errorContainer.appendChild(span);
  showImage();
}

const showImage = () => {
  const img = imageContainer[errorLetters.length - 1];
  img.classList.remove('hidden');
  img.classList.add('showed');
}

const word = sortWord(words);
placeLetters(word);

document.addEventListener('keydown', initGame);
