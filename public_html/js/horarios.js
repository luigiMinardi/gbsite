//mensagem de ajuda pra telas pequenas
var mensagemAjuda = document.querySelector("#mensagem-ajuda");
var inicio = document.querySelector("#inicio-h");

function myFunction(x) {
  if (x.matches) { // If media query matches
    mensagemAjuda.textContent = "";
    inicio.classList.add("mt-5");
  } else {
  	mensagemAjuda.textContent = "Si no puede ver o interactuar con el calendario, haga clic aquí.";
  	inicio.classList.remove("mt-5");
  }
}
var x = window.matchMedia("(min-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

