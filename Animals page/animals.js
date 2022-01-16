var animals = ["dog", "cat", "hippo", "rhino", "zebra", "elephant"]
let rng = Math.floor(Math.random()*animals.length);
let chosenWord = animals[rng];

let clickedLettersRight = [];
let clickedLettersWrong = [];

window.onload =  function startGame() {
    for (let i = 0; i < animals[rng].length; i++) {
        let wordContainer = `<span id="${"letter-"+i}" class="letterContainer"></span>`;
        document.getElementById("divTexto").innerHTML += wordContainer;
        console.log(wordContainer);
    }
}

function letterClick(letter) {
  if (chosenWord.includes(letter)) {
      let letterIndex = chosenWord.indexOf(letter);
      document.getElementById(`letter-${letterIndex}`).innerText = letter
      clickedLettersRight.push(letter)
  } else {
    clickedLettersWrong.push(letter)
    document.getElementById("head").style.display = "block"
  }
}

console.log("Letter:", letter)
    console.log("Chosen Word:", chosenWord)
    console.log("Right letters:", clickedLettersRight)
    console.log("Wrong letters:", clickedLettersWrong)