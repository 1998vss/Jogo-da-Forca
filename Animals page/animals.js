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

function gameOver() {
  window.location.href = "/Game Over/gameover.html"
}

function letterClick(letter) {
  if (chosenWord.includes(letter)) {
      let letterIndex = chosenWord.indexOf(letter);
      document.getElementById(`letter-${letterIndex}`).innerText = letter
      clickedLettersRight.push(letter)
  } else {
    clickedLettersWrong.push(letter)
    switch (clickedLettersWrong.length) {
      case 1:
        document.getElementById("head").style.display = "block";
      break;
      case 2:
        document.getElementById("torso").style.display = "block";
      break;
      case 3:
        document.getElementById("rightArm").style.display = "block";
      break;
      case 4:
        document.getElementById("leftArm").style.display = "block";
      break;
      case 5:
        document.getElementById("rightLeg").style.display = "block";
      break;
      case 6:
        document.getElementById("leftLeg").style.display = "block";
        gameOver()
    }
  }
}

console.log("Letter:", letter)
    console.log("Chosen Word:", chosenWord)
    console.log("Right letters:", clickedLettersRight)
    console.log("Wrong letters:", clickedLettersWrong)