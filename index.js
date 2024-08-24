
function encriptar() {
    let texto = document.getElementById("texto").Value;
     let titulomensaje = document.getElementById("titulo-mensaje");
     let parrafo = document.getElementById("parrafo");
     let muñeco = document.getElementById("muñeco"); 
    
    let textocifrado = texto
         .replace(/e/gi, "enter")
         .replace(/i/gi, "ines")
         .replace(/a/gi, "ai")
         .replace(/o/gi,"ober")
         .replace(/u/gi,"ufat");
if (texto.length != 0) {
    document.getElementById("texto").Value = textocifrado;
    titulomensaje.textContent = "texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jgp";
}else {
    muñeco.src = "./img/muñeco.1.png";
    titulomensaje.textContent = "ningun mensaje fue encontrado";
    parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
    alert("debes ingresaralgun texto");
}

  } 
  
  function desencriptar() {
    let texto = document.getElementById("texto").Value;
    let textocifrado = texto
         .replace(/enter/gi, "e")
         .replace(/ines/gi, "i")
         .replace(/a/gi, "a")
         .replace(/ober/gi,"o")
         .replace(/ufat/gi,"u");
   if (texto.length != 0)  { 
   document.getElementById("texto").Value = textocifrado;
   titulomensaje.textContent = "texto desencriptado con exito";
   parrafo.textContent = "";
   muñeco.src = "./img/desncriptado.jgp";
}else {
    muñeco.src = "./img/muñeco.1.png";
    titulomensaje.textContent = "ningun mensaje fue encontrado";
    parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
    alert("debes ingresaralgun texto");

    
 }
}