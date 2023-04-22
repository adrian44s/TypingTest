const typingTest = document.querySelector(".typing-test p");
const inputField = document.querySelector(".wrapper .input");
let charInd = 0;
const mistake = document.querySelector(".mistake span");
let mistk = 0;

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
  let typedChar = inputField.value.split("")[charInd];
  if (typedChar == null) {
    charInd--;
    if (charac[charInd].classList.contains("incorrect")) {
      mistk--;
    }
    charac[charInd].classList.remove("correct", "incorrect");
  } else {
    if (charac[charInd].innerText === typedChar) {
      charac[charInd].classList.add("correct");
    } else {
      mistk++;
      charac[charInd].classList.add("incorrect");
    }
    charInd++;
  }

  charac[charInd].classList.add("active");
  mistake.innerText = mistk;
}

pickRamdomQuote();
inputField.addEventListener("input", initTyping);
