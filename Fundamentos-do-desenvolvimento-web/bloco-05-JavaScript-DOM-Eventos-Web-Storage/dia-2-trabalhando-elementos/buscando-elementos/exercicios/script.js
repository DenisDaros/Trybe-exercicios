// Acesse o elemento elementoOndeVoceEsta .
function elementoOndeVoceEsta (){
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(ondeVoceEsta)
}
elementoOndeVoceEsta ()
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function paiMudaCor(){
    let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    ondeVoceEsta.parentElement.style.color = "red"
}
paiMudaCor()
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
function adicionarTextoPrimeiroFilho(){
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText="Xablau"
}
adicionarTextoPrimeiroFilho()
// Acesse o primeiroFilho a partir de pai .
function acessandoPrimeiroFilhoApartirDoPai (){
let pai = document.getElementById("pai");
console.log(pai.firstElementChild)
}
acessandoPrimeiroFilhoApartirDoPai ()
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
function acessandoPrimeiroFilhoApartirElementoOndeVoceEsta(){
    let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    console.log(ondeVoceEsta.parentElement.firstElementChild)
}
acessandoPrimeiroFilhoApartirElementoOndeVoceEsta()
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
function acesseTexto(){
    let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    console.log(ondeVoceEsta.nextSibling)
}
acesseTexto()
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
function acesseTerceiroFIlho(){
    let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    console.log(ondeVoceEsta.nextElementSibling)
}
acesseTerceiroFIlho()
// Agora acesse o terceiroFilho a partir de pai .
function acesseTerceiroFIlhoAPartirDoPai(){
    let pai = document.getElementById("pai");
    console.log(pai.lastElementChild.previousElementSibling)
}
acesseTerceiroFIlhoAPartirDoPai()