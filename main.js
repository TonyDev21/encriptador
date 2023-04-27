/* VARIABLES */
const texto = document.getElementById("text")
const descriptado = document.getElementById("descriptado")
const encript = document.getElementById("btn-encript")
const descript = document.getElementById("btn-descript")
const btnCopiar = document.getElementById("btn-copiar")
const cajaTexto =  document.querySelector(".caja-texto-descriptado")
const cajaTextoImagen = document.querySelector(".caja-texto-imagen")

/* FUNCIONES */
function encriptar(){

    const textoValor = texto.value.toLowerCase()
    
    if (textoValor == "") { 
  
        alert("Ingrese una palabra para encriptar");
    
    } else {
        let txtCifrado = textoValor.replace(/e/g, "enter")
                              .replace(/o/g, "ober")    
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/u/g, "ufat")

      
        descriptado.value = txtCifrado;

        texto.value = ""
        cajaTextoImagen.style.display = "none"
        encript.disabled = true;
        descript.disabled = false;
        btnCopiar.style.display = "block"
        texto.disabled = true
        texto.placeholder = ""
        btnCopiar.focus()
    }

    
}

function desencriptar(){

    const descriptadoValor = descriptado.value
    
    if(descriptadoValor == ""){
        alert("No hay ningun mensaje por decifrar"); 

    }else{
        
        let txtDecifrado = descriptadoValor.replace(/enter/g, "e")
                                      .replace(/ober/g, "o")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ufat/g, "u")

        texto.value = txtDecifrado;
        cajaTexto.value = ""
        descript.disabled = true
        encript.disabled = false
        texto.disabled = false
        btnCopiar.style.display = "none"
    }

    
}

function alert(){   // alerta personalizada
    swal({
        title: "Cifrado Copiado!",
        text: "Ingrese Nuevo Texto para Encriptar!",
        icon: "success",
      });
}


/* EVENTO COPIAR */
btnCopiar.onclick = function() {
    const copy = document.getElementById("descriptado").value;
 
    navigator.clipboard.writeText(copy)
    .then(() => {
        btnCopiar.style.display = "none"
        encript.disabled = false;
        descript.disabled = true;
        cajaTexto.value = ""
        cajaTextoImagen.style.display = "block"
        texto.placeholder = "Ingrese nuevo texto"
        texto.disabled = false
        alert()
        texto.focus()
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}
