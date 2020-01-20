//toggle "d-flex" nos icones de redes sociais para telas menores
var redesSociais = document.querySelector("#redes-sociais");


function myFunction(x) {
  if (x.matches) { // If media query matches
    redesSociais.classList.remove("d-flex")
  } else {
  	redesSociais.classList.add("d-flex")
  }
}
var x = window.matchMedia("(min-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
