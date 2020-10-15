document.getElementById("IM").onmouseover = function() {mouseOver()};
document.getElementById("IM").onmouseout = function() {mouseOut()};

function mouseOver() {
document.getElementById("IM").style.padding = "20px";
}

function mouseOut() {
document.getElementById("IM").style.padding = "0px";
}

botoncolor = document.querySelector ("#boton1");
par = document.querySelector ("#p1");
function fondo(){
   par.style.backgroundColor = "yellow";
}
botoncolor.onclick = fondo;

botonesconder = document.querySelector ("#boton2");
parraf = document.querySelector ("#p1");
function esconder(){
   parraf.style.display = "none";
}
botonesconder.onclick = esconder;

botonaparecer = document.querySelector ("#boton3");
parraf = document.querySelector ("#p1");
function aparecer(){
   parraf.style.display = "block";
}
botonaparecer.onclick = aparecer;