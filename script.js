function encriptar (){
    var texto = document.querySelector("#idTexto").value;

    if(texto != ''){
        //alert("Esta llena")
        document.getElementById("miDIV").style.display = "none";
    }else{
        alert("Ingresa algún dato")
    }

        if(validarNumeros(texto) == 0){
            if(validarLetras(texto) == 1){
                if(validarMayusculas(texto) == 0){
                    if(validarAcentos(texto) == 0){
                        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
                        document.querySelector("#idTextAreaMostrario").value = textoCifrado;
                        document.querySelector('#idTexto').value = '';
                    }else{
                        alert('Solo se permiten letras minúsculas sin acentos');
                        document.querySelector('#idTexto').value = '';
                    }
                }else{
                    alert('Solo se permiten letras minúsculas sin acentos');
                    document.querySelector('#idTexto').value = ''
                }
            }else{
                alert('Solo se permiten letras minúsculas sin acentos');
                document.querySelector('#idTexto').value = '';
            }
        }else{
            alert('Solo se permiten letras minúsculas sin acentos');
            document.querySelector('#idTexto').value = '';
        }
    }


    
var boton1 = document.querySelector("#boton-encriptar"); 
boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#idTexto").value; 
    if(texto != ''){
        //alert("Esta llena")
        document.getElementById("miDIV").style.display = "none";
    }else{
        alert("Ingresa algún dato")
    }
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#idTextAreaMostrario").value = textoCifrado; 
    document.querySelector("#idTexto").value;

}

var boton2 = document.querySelector("#boton-desencriptar"); boton2.onclick = desencriptar;


function validarNumeros(texto){
    var numeros="0123456789";
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 } 


function validarLetras(texto){
    var caracteresPermitidos="abcdefghiyjklmnopqrstuvwxyz";
    for(i=0; i<texto.length; i++){
       if (caracteresPermitidos.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 } 

 function validarMayusculas(texto){
    var letras_mayusculas="ABCDEFGHIYJKLMNOPQRSTUVWXYZ";
    for(i=0; i<texto.length; i++){
       if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }

 function validarAcentos(texto){
    for(i=0; i<texto.length; i++){
        //á, é, í, ó, ú, ý, Á, É, Í, Ó, Ú, Ý
        if(texto.search('á') != -1 || texto.search('Á') != -1){
            return 1;
        }
        else if(texto.search('é') != -1 || texto.search('É') != -1){
            return 1;
        }
        else if(texto.search('í') != -1 || texto.search('Í') != -1){
            return 1;
        }
        else if(texto.search('ó') != -1 || texto.search('Ó') != -1){
            return 1;
        }
        else if(texto.search('ú') != -1 || texto.search('Ú') != -1){
            return 1;
        }
        else if(texto.search('ý') != -1 || texto.search('Ý') != -1){
            return 1;
        }
        //à, è, ì, ò, ù, À, È, Ì, Ò, Ù
        else if(texto.search('à') != -1 || texto.search('À') != -1){
            return 1;
        }
        else if(texto.search('è') != -1 || texto.search('È') != -1){
            return 1;
        }
        else if(texto.search('ì') != -1 || texto.search('Ì') != -1){
            return 1;
        }
        else if(texto.search('ò') != -1 || texto.search('Ò') != -1){
            return 1;
        }
        else if(texto.search('ù') != -1 || texto.search('Ù') != -1){
            return 1;
        }
        //â, ê, î, ô, û, Â, Ê, Î, Ô, Û
        else if(texto.search('â') != -1 || texto.search('Â') != -1){
            return 1;
        }
        else if(texto.search('ê') != -1 || texto.search('Ê') != -1){
            return 1;
        }
        else if(texto.search('î') != -1 || texto.search('Î') != -1){
            return 1;
        }
        else if(texto.search('ô') != -1 || texto.search('Ô') != -1){
            return 1;
        }
        else if(texto.search('û') != -1 || texto.search('Û') != -1){
            return 1;
        }
        //ä, ë, ï, ö, ü, ÿ, Ä, Ë, Ï, Ö, Ü, Ÿ
        else if(texto.search('ä') != -1 || texto.search('Ä') != -1){
            return 1;
        }
        else if(texto.search('ë') != -1 || texto.search('Ë') != -1){
            return 1;
        }
        else if(texto.search('ï') != -1 || texto.search('Ï') != -1){
            return 1;
        }
        else if(texto.search('ö') != -1 || texto.search('Ö') != -1){
            return 1;
        }
        else if(texto.search('ü') != -1 || texto.search('Ü') != -1){
            return 1;
        }
        else if(texto.search('ÿ') != -1 || texto.search('Ÿ') != -1){
            return 1;
        }
        //ã, ñ, õ, Ã, Ñ, Õ
        else if(texto.search('ã') != -1 || texto.search('Ã') != -1){
            return 1;
        }
        else if(texto.search('ñ') != -1 || texto.search('Ñ') != -1){
            return 1;
        }
        else if(texto.search('õ') != -1 || texto.search('Õ') != -1){
            return 1;
        }


    }
    return 0;
    
}