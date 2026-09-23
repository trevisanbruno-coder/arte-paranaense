const botoesCurti = document.querySelectorAll("curti");
botoesCurti.forEach(function(botaoCurti) {
let curtiu = false;
botaoCurti. addEventListener("click", curti);
function curtir() {
const contador = botaoCurti.querySelector("span");
if (curtiu === false){
contador.textContent++;
curtiu = true;
} else {
contador.textContent--;
curtiu = false;
}

}
});
