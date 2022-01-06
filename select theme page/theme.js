var animals = false
var work = false
var bed = false

function keepSelected() {
    document.getElementById("animals").style.border = "2px solid #B70A0A";
    document.getElementById("work").style.border = "transparent";
    document.getElementById("bed").style.border = "transparent";
    animals = true
}

function keepSelected2() {
    document.getElementById("work").style.border = "2px solid #000000";
    document.getElementById("animals").style.border = "transparent";
    document.getElementById("bed").style.border = "transparent";
    work = true
}

function keepSelected3() {
    document.getElementById("bed").style.border = "2px solid #ffffff";
    document.getElementById("animals").style.border = "transparent";
    document.getElementById("work").style.border = "transparent";
    bed = true
}

function GoToPage(){
    if (animals) {
        window.location.href = "/Animals page/animals.html"
    }
    else if (work) {
        window.location.href = "/error.html"
    }
    else if (bed) {
        window.location.href = "/error.html"
    }
}
// ao clicar na imagem, executar função
// trocar valor da variável booleana 
