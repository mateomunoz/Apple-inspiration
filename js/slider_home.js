const fotos = ["media/imagenes/home_slider.webp", "media/imagenes/home_slider2.webp","media/imagenes/home_slider3.webp", "media/imagenes/home_slider4.webp","media/imagenes/home_slider5.webp", "media/imagenes/home_slider6.webp", "media/imagenes/home_slider7.webp", "media/imagenes/home_slider8.webp" ]
const color_punto = ["media/imagenes/circulo-negro.png", "media/imagenes/circulo-vacio.png"];
let numFoto=0;


document.querySelector("#atras").addEventListener("click", retroceder);
document.querySelector("#adelante").addEventListener("click", avanzar);
let puntos = document.querySelectorAll(".puntos img");
console.log(puntos.length);

function retroceder(){
    numFoto--
    console.log(numFoto);
    if(numFoto<0){
        numFoto=fotos.length-1;
    }
    document.querySelector("#foto-grande").setAttribute("src", fotos[numFoto]);
    vaciar();
    puntos[numFoto].src=color_punto[0];
    
}

function avanzar(){
    
    numFoto++
    console.log(numFoto);
    if(numFoto>fotos.length-1){
        numFoto=0;
    }
    document.querySelector("#foto-grande").setAttribute("src", fotos[numFoto]);
    vaciar();
    puntos[numFoto].src=color_punto[0];

}

function vaciar() {

    for (let i = 0; i < puntos.length; i++){
        puntos[i].src=color_punto[1];
    }
}