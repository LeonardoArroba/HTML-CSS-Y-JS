const contenido = document.getElementById("contenido");

let nombre = "Andres Arroba";
let edad = 19;

let edades = [23, 45, 2, 42]


addContent("<h2>"+nombre+"</h2><h3>"+edad+"</h3>")

// const COLOR_ROJO = "#FF0000";

// let resultado = "Nombre: " + nombre;

// nombre = "Leonardo Arroba";


// if (edad > 18){
//     alert("Puedes entrar en la disco");
// }else if(edad > 13){
//     alert("Puedes entrar con un adulto")
// }else{
//     alert("NO puedes entrar")
// }


for(let i = 0; i < edades.length; i++){
    addContent("<h3>La edad es de " + edades[i] + " años</h3>")
}

function addContent(newContent){
    // console.log(newContent);
    contenido.innerHTML += newContent;
}



