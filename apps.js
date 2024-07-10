const codificacion = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
// Función para modificar el display de los elementos
function cambiarDisplay() {
  let textoResultado = document.getElementById("texto__traducido");
  let botonCopiar = document.querySelector(".boton__copiar");
  let muneco = document.querySelector(".muneco");
  let textoMuestra = document.querySelector(".texto__muestra");

  muneco.style.display = "none";
  textoMuestra.style.display = "none";
  textoResultado.style.display = "block";
  botonCopiar.style.display = "block";
}
//Comprobar que solo sean letras,este en minusculas y no sea vacio
function comprobacionTexto() {
  let textoATraducir = document
    .getElementById("texto__traducir")
    .value.trim()
    .toLowerCase();

  let condiciones = /^[a-z\s!]*$/; // Variable con las condiciones para verificar  que sean solo letras minúsculas, sin acentos y no vacío

  if (textoATraducir !== "") {
    console.log(textoATraducir);
    if (condiciones.test(textoATraducir)) {
      return true;
    } else {
      alert("El texto contiene caracteres no permitidos ( números, etc.)");
    }
  } else {
    alert("El texto no puede estar vacío.");
    return false;
  }
}
//Encriptar el texto comprobado y mostrarlo
function encriptar() {
  if (comprobacionTexto()) {
    let textoATraducir = document
      .getElementById("texto__traducir")
      .value.toLowerCase();
    let textoResultado = document.getElementById("texto__traducido");
    textoResultado.value = codificarTexto(textoATraducir);
    cambiarDisplay();
  }
}
function codificarTexto(texto) {
  return texto.replace(/[eioua]/g, (letra) => codificacion[letra]);
}
function desencriptar() {
  if (comprobacionTexto()) {
    let textoATraducir = document
      .getElementById("texto__traducir")
      .value.toLowerCase();
    let textoTraducido = document.getElementById("texto__traducido");

    textoTraducido.value = decodificarTexto(textoATraducir);
    cambiarDisplay();
  }
}
function decodificarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
function copiarTexto() {
  let textoResultado = document.getElementById("texto__traducido");
  let mensajeCopiado = document.getElementById("mensajeCopiado");

  if (textoResultado.value !== "") {
    navigator.clipboard.writeText(textoResultado.value);

    // Mostrar mensaje de copiado
    mensajeCopiado.style.display = "block";

    // Ocultar mensaje de copiado después de 1 segundo
    setTimeout(function () {
      mensajeCopiado.style.display = "none";
    }, 1000);
  } else {
    // Mostrar alerta de campo vacío
    alert("No hay nada para copiar");
  }
}
