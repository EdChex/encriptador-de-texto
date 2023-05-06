function encriptar(){
    let texto = document.getElementById("texto").value;
  //  let titulomensaje = document.getElementById("titulo-mensaje");
   // let parrafo = document.getElementById("parrafo");
   // let muñeco =document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "ereyes")
        .replace(/i/gi, "iter")
        .replace(/a/gi, "ares")
        .replace(/o/gi, "owar")
        .replace(/u/gi, "ugafut");

    if (document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value=textoCifrado;
        document.getElementById("titulo-mensaje").textContent = 
        "Texto encriptado con éxito";
        document.getElementById("muñeco").src = "./imagenes/encriptado.png";
        document.getElementById("parrafo").textContent="";
       
    }else{
        swal("Debes ingresar algún texto");
    document.getElementById("muñeco").src = "./imagenes/warning.png";
    
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;


    let textoDecifrado = texto
        .replace(/ereyes/gi, "e")
        .replace(/iter/gi, "i")
        .replace(/ares/gi, "a")
        .replace(/owar/gi, "o")
        .replace(/ugafut/gi, "u");

        if (document.getElementById("texto").value.length !=0){
            document.getElementById("texto").value=textoDecifrado;
            document.getElementById("titulo-mensaje").textContent = 
            "Texto desencriptado con éxito";
            document.getElementById("muñeco").src = "./imagenes/Desencriptado.png";
            document.getElementById("parrafo").textContent="";
           
        }else{
        document.getElementById("muñeco").src = "./imagenes/warning.png";
        swal ("Debes ingresar algún texto");
        }
}