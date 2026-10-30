let botonnaranja = document.getElementById("naranja")
let botonNegro = document.getElementById("negro")
let botonAmarillo = document.getElementById("amarillo")

botonnaranja.addEventListener("click",function(){
    document.body.style.backgroundColor = "orange";
});

botonNegro.addEventListener("click",function(){
    document.body.style.backgroundColor = "black";
});

botonAmarillo.addEventListener("click",function(){
    document.body.style.backgroundColor = "yellow";
});
