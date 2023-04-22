const typingTest = document.querySelector(".typing-test p");
const inputField = document.querySelector(".wrapper .input");
let charInd = 0;

function pickRamdomQuote() {
  let randomIn = Math.floor(Math.random() * quotes.length);
  quotes[randomIn].split("").forEach((span) => {
    let stag = `<span>${span}</span>`;
    typingTest.innerHTML += stag;
  });

  document.addEventListener("keydown", () => inputField.focus());
  typingTest.addEventListener("click", () => inputField.focus());
}

function initTyping() {
  const charac = typingTest.querySelectorAll("span");
  let typedChar = inputField.value.split('')[charInd];
  if(charac[charInd].innerText === typedChar){
    charac[charInd].classList.add('Correct')
  }else{
    charac[charInd].classList.add('Incorrect')
  }
  charInd++
}

pickRamdomQuote();
inputField.addEventListener("input", initTyping);