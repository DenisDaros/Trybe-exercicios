// Crie um irmão para elementoOndeVoceEsta .

function criandoIrmao(){
    let pai = document.getElementById("pai");
    let section = document.createElement("section");
    section.classList.add("irmão")
    pai.appendChild(section)
}
criandoIrmao()

// Crie um filho para elementoOndeVoceEsta .
function criandoFilho(){
    let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    let section = document.createElement("section");
    section.classList.add("filhoCaçula")
    ondeVoceEsta.appendChild(section)
}
criandoFilho()
// Crie um filho para primeiroFilhoDoFilho .
function criandoFilhoDois(){
    let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
    let section = document.createElement("section");
    section.classList.add("primeiroFilhoDoFilhoDoFilho")
    primeiroFilhoDoFilho.appendChild(section)
}
criandoFilhoDois()
// A partir desse filho criado, acesse terceiroFilho .
function criandoFilhoTres(){
    let primeiroFilhoDoFilhoDoFilho = document.getElementsByClassName("primeiroFilhoDoFilhoDoFilho")[0];
   
  console.log(primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling
    );
}
criandoFilhoTres()
