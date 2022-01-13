var animals = ["dog", "cat", "hippo", "rhino", "zebra", "elephant"]
let rng = Math.floor()*animals.length;
let chosenWord = animals[rng];

window.onload =  function startGame() {
    for (let i = 0; i < animals[rng].length; i++) {
        let wordContainer = `<span id="${"letter-"+i}" class="letterContainer"></span>`;
        document.getElementById("divTexto").innerHTML += wordContainer;
        console.log(wordContainer);
    }
}

function letterClick(letter) {
   // if chosenWord.includes(letter)
}