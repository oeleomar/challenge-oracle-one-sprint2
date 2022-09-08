const textContainer = document.querySelector("#text-container");
const words = JSON.parse(localStorage.getItem('data'));
let counter = 0;

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
  for(let i = 0; i < word.length; i++){
    console.log(word[i], letter);
    if(letter === word[i]){
      textContainer.childNodes[i + 1].textContent = letter
      counter ++
      console.log(counter)
      checkWinner();
    }

  }
}

const checkWinner = () => {

}

const word = sortWord(words);
placeLetters(word);

document.addEventListener('keydown', initGame);
