function inicioSesion() {
  document.getElementById("lanzadorLogin").style.display = "none";
  document.getElementById("lanzadorRegister").style.display = "none";
  document.getElementById("lanzadorLogout").style.display = "block";
  document.getElementById("editarPagina").style.display = "block";
}

//NO FUNCIONA

// function editarPerfil() {
//     const lapiz = document.getElementsByClassName("lapizCon")[0];
//     const cruz = document.getElementsByClassName("cruzCon")[0];

//     lapiz.setAttribute("style", "style = display:block");
//     cruz.setAttribute("style", "style = display:block");

// };

function editarParrafo(idTexto, idBoton) {
  document.getElementById(idTexto).removeAttribute("readonly");

  document.getElementById(idBoton).style.display = "block";
}

function modificarParrafo(idTexto, idBoton) {
  const nuevoTextoProfesional = document.getElementById(idTexto).textContent;

  document.getElementById(idTexto).setAttribute("readonly", "true");

  document.getElementById(idBoton).style.display = "none";
}

function eliminar(idABorrar) {
  document.getElementById(idABorrar).outerHTML = " ";
}
