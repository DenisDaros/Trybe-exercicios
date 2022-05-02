// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
// 
let button = document.querySelector("#preventDefault");



function deuRuim(event){
    event.preventDefault()
};

button.addEventListener("click",deuRuim)