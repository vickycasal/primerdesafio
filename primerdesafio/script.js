var texto = document.querySelector("#input-texto");
var textoDos = document.querySelector("#msg");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar")


botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var frase = texto.value;
    textoDos.value = frase.replace(/e/g,"enter").replace (/i/g,"imes").replace (/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
   
});

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var frase = texto.value;
    textoDos.value = frase.replace(/enter/g,"e").replace (/imes/g,"i").replace (/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

})

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(){
       
    var copiado = textoDos.value;
    navigator.clipboard.writeText(copiado);
    
})


