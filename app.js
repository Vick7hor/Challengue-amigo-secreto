//Declaración de la lista y variables
let ListaAmigos = [];
let NombreAmigo;


//Agregamos a la lista el nombre escrito
function agregarAmigo() {
    NombreAmigo = document.getElementById("amigo").value;
    //Validamos que no este vacio
    if (NombreAmigo.trim()===""){
        alert("Ingresa un nombre valido");
    }else{
        ListaAmigos.push(NombreAmigo);
        document.querySelector("#amigo").value = "";
        mostrarLista();
    }
}


//Mostramos la lista por medio los elementos de una tabla, mediante el DOM
function mostrarLista(){
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = "";

    for (let index = 0; index < ListaAmigos.length; index++) {
        const element = ListaAmigos[index];
        
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        elementoLista.appendChild(listaHTML);
    }
}

//Sorteamos los nombre por medio de un random
function sortearAmigo(){
    let cantidadAmigos = ListaAmigos.length;

    if (cantidadAmigos ===0){
        alert("Inserta un nombre antes de sortear");
    }else{
        let indiceAmigo = Math.floor(Math.random()*cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = ListaAmigos[indiceAmigo];
    }
}