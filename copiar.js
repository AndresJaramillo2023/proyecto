function copiarAlPortapapeles(id_elemento) { 
    var content = document.getElementById(id_elemento);
    content.select();
    document.execCommand('copy');
    alert("Copiado!")
}

/*
Copiar version 2
function copyToClickBoard(){
    var content = document.getElementById('idTextAreaMostrario');
    content.select();
    document.execCommand('copy');
    alert("Copiado!");
}
*/