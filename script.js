let botonRojo = document.getElementByld("rojo")
let botonAzul = document.getElementByld("azul")
let botonVerde = document.getElementByld("verde")

botonRojo.addEventlistener("click",function(){
    document.body.style.backgroundColor ="lightcoral";
});

botonAzul.addEventlistener("click",function(){
    document.body.style.backgroundColor ="lightblue";
});

botonVerde.addEventlistener("click",function(){
    document.body.style.backgroundColor ="lightgreen";
});

