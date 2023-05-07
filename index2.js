function encriptar(){
    let texto = document.getElementById("texto").value;
  //  let titulomensaje = document.getElementById("titulo-mensaje");
   // let parrafo = document.getElementById("parrafo");
   // let muñeco =document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
       .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

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
        .replace(/enter/gi,"e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

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
