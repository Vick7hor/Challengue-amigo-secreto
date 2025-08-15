// Declaración de variables y lista para almacenar nombres
let ListaNombres = [];
let NombreSecreto;


//Funcion que agrega a la lista los nombres generados

function agregarAmigo(){
    NombreGenerado = document.getElementById("amigo").value;
    //Validamos si esta vacio el input
    if(NombreGenerado.trim()=== ""){
        alert("Ingresa un nombre");
    }else{
        ListaNombres.push(NombreGenerado);
        document.querySelector("#amigo").value = "";
    }
}


//Funcion para sortear los amigos
function sortearAmigo(){
    let cantidadAmigos = ListaNombres.length;
    if (cantidadAmigos === 0){
        alert("Es necesario un nombre antes de sortear");
    }else{
        let indiceAmigo = Math.floor(Math.random()*cantidadAmigos);
        let resultado = ListaNombres(indiceAmigo);
        alert(`El nombre sorteado es: ${resultado}`);
    }
}

