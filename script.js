const htmlTag = document.querySelector("html");
const toogleButtom = document.querySelector("#switch");
function seta(e) {
  htmlTag.classList.toggle("modoluz");
}
toogleButtom.addEventListener("click", seta);
