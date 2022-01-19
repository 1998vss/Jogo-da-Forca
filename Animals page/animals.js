var animals = ["dog", "cat", "hippo", "rhino", "zebra", "elephant"];
let rng = Math.floor(Math.random()*animals.length);
let chosenWord = animals[rng];
let clickedLettersRight = [];
let clickedLettersWrong = [];
let repeatedIndexes = [];

window.onload =  function startGame() {
  for (let k = 0; k < animals[rng].length; k++) {
    let wordContainer = `<span id="${"letter-"+k}" class="letterContainer"></span>`;
    clickedLettersRight = [];
    clickedLettersWrong = [];
    document.getElementById("divTexto").innerHTML += wordContainer;
    // console.log(wordContainer);
    // console.log(clickedLettersRight);
    for (let i = 0; i < chosenWord.length; i++) {
      for (j = 0; j < chosenWord.length; j++); {
        if (i !== j) {
          if (chosenWord[i] == chosenWord[j]) {
                  repeatedIndexes.push(i);
                  console.log(repeatedIndexes)
          }
        }
      }   
    }
  }
}

function reset() {
  document.getElementById("divTexto").innerHTML = "";
  rng = Math.floor(Math.random()*animals.length);
  chosenWord = animals[rng];
  clickedLettersRight = [];
  clickedLettersWrong = [];
  // console.log(animals[rng]);
  for (let k = 0; k < animals[rng].length; k++) {
    let wordContainer = `<span id="${"letter-"+k}" class="letterContainer"></span>`;
    document.getElementById("divTexto").innerHTML += wordContainer;
    // console.log(wordContainer);
    for (let i = 0; i < chosenWord.length; i++) {
      for (j = 0; j < chosenWord.length; j++) {
        if (i !== j) {
          if (chosenWord[i] == chosenWord[j]){
                  repeatedIndexes.push(i);
                  console.log(repeatedIndexes);
          }
        }
      }  
    }
  }
  console.log(clickedLettersRight);
}

function letterClick(letter) {
  if (chosenWord.includes(letter)) {
      let letterIndex = chosenWord.indexOf(letter);
      if (repeatedIndexes.includes(letterIndex)) {
        for (let i = 0; i < repeatedIndexes.length; i++) {
          document.getElementById(`letter-${repeatedIndexes[i]}`).innerText = letter;
          clickedLettersRight.push(chosenWord[repeatedIndexes[i]]);
        }
      } else {
        letterIndex = chosenWord.indexOf(letter);
        document.getElementById(`letter-${letterIndex}`).innerText = letter;
        clickedLettersRight.push(letter);
        }
      console.log(clickedLettersRight);
      if (clickedLettersRight.length == chosenWord.length) {
        animals.splice(rng, 1); 
        if (animals.length == 0) {
          window.location.href = "/Win page/win.html";
        }
        console.log(animals);
        reset();
      }
  } else {
    clickedLettersWrong.push(letter);
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
        gameOver();
    }
    }
}

function gameOver() {
  window.location.href = "/Game Over/gameover.html";
}