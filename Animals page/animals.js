var animals = ["dog", "cat", "hippo", "rhino", "zebra", "elephant"]

window.onload =  function startGame() {
    for (let i = 0; i < animals[6].length; i++) {
        let wordContainer = `<span id="${"letter-"+i}" class="letterContainer"></span>`;
        document.getElementById("divTexto").innerHTML += wordContainer;
        console.log(wordContainer);
    }
}

function letterClick() {
    if () {
        document.getElementById("letter-"+i).innerHTML = 
    }
}