const typingTest= document.querySelector(".typing-test p");

function pickRamdomQuote() {
    let randomIn = Math.floor(Math.random()*quotes.length)
    quotes[randomIn].split("").forEach(span =>{
        let stag = `<span>${span}</span>`;
        typingTest.innerHTML += stag;
    });
}

pickRamdomQuote();