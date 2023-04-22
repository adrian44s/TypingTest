const typingTest = document.querySelector(".typing-test p");
const inputField = document.querySelector(".wrapper .input");
let charInd = 0;
const mistake = document.querySelector(".mistake span");
let mistk = 0;
const timeTag = document.querySelector(".time span b");
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let isTyping;
const wpmTag = document.querySelector(".wpm span");

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
  if (!isTyping) {
    timer = setInterval(initTimer, 1000);
    isTyping = true;
  }

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
  charac.forEach((span) => span.classList.remove("active"));
  charac[charInd].classList.add("active");
  mistake.innerText = mistk;
  let wpm = Math.round(((charInd - mistk) / 5 / (maxTime - timeLeft)) * 60);
  wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
  wpmTag.innerHTML = wpm;
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    if (timeLeft === 0) {
      inputField.disabled = true;
    }
  } else {
    clearInterval(timer);
  }
}

pickRamdomQuote();
inputField.addEventListener("input", initTyping);
