window.onload = comecar;

function comecar() {
    novaCartela();
    document.getElementById("recarregar").onclick = outracartela;
}

function novaCartela() {
    for (let i = 0; i < 24; i++) {
        Numero(i);
    }

}

let uNumeros = new Array(76);
let coluna = new Array(
    0, 0, 0, 0, 0, //B
    1, 1, 1, 1, 1, //I
    2, 2, 2, 2,  //N
    3, 3, 3, 3, 3, //G
    4, 4, 4, 4, 4); //O

function Numero (thisNumero) {
    let pNumero = "quadrado" + thisNumero;

    let baseColuna = coluna[thisNumero] * 15;

    let novoNumero;

    do {
        novoNumero = baseColuna + getNovoNumero()+1
    } while (uNumeros[novoNumero]);

    uNumeros[novoNumero] = true;

    Document.getElementById(pNumero).innerHTML = novoNumero;
    Document.getElementById(pNumero).classList = ""
    Document.getElementById(pNumero).onmousedown = trocaCor
}

function getNovoNumero() {
    return Math.floor(Math.random() * 15);
}

function outracartela() {
    for (let i = 1; i < uNumeros.length; i++) {
        uNumeros[i] = False

    }
    novaCartela();
    return false;
}

function trocaCor(evt) {
    if (evt) {
        thisNumero = evt.target;
    }

    if (thisNumero.className == "") {
        thisNumero.className = "trocaCor"
    } else {
        thisNumero.className = ""
    }
}
