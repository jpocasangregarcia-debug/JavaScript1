let botonNaranja = document.getElementByld("naranja")
let botonNegro = document.getElementByld("negro")
let botonAmarillo = document.getElementByld("amarillo")

botonNaranja.addEventlistener("click",function(){
    document.body.style.backgroundColor ="orange";
});

botonNegro.addEventlistener("click",function(){
    document.body.style.backgroundColor ="negro";
});

botonAmarillo.addEventlistener("click",function(){
    document.body.style.backgroundColor ="yellow";
});

