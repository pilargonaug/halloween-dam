/* funciones para mostrar/ocultar y sonar/parar */
function show(element){
    document.getElementById(element).style.visibility="visible";
 }
 function hide(element){
    document.getElementById(element).style.visibility="hidden";
 }
 function sonar(musica){
    document.getElementById(musica).play();
 }
 function parar(musica){
    document.getElementById(musica).pause();
 }