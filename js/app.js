function cambiarTitulo(){
    console.log("desde la funcion cambiar titulo");
    //traer el h1 del maquetadoc
    let TituloPrincipal = document.querySelector("#Titulo")
    console.log(TituloPrincipal)
    TituloPrincipal.innerHTML = "un nuevo titulo"
    TituloPrincipal.className = "colonuevo display-4"
}

function verMas(){
    let botonVerMas =document.getElementById("btnVerMas");
    let sectionPadre = document.getElementsByClassName("container")

    if(botonVerMas.innerHTML === "ver mas.."){

        // crear el parrafo primera forma
        let parrafoNuevo = document.createElement("p"); //<p></p>
        //  preparar el elemento
        parrafoNuevo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi illum, error atque vitae, iure cumque molestias suscipit dolores vel ipsam dolorum dolore. Quisquam voluptatum, illum, repellendus est voluptates, soluta nostrum non inventore odio aliquam perferendis excepturi voluptas quam magni ipsam. Corrupti sunt, ut vel voluptas exercitationem velit natus architecto."
    parrafoNuevo.className = "lead"
    console.log(parrafoNuevo)
    
    //traer el elemento padre
    console.log(sectionPadre[1]);
    //agregar o insertar en dom
    //sectionPadre[1].appendChild(parrafoNuevo) //agreaga el nodo hijo al final
    //sectionPadre[1].prepend(parrafoNuevo) //agregar el nodo hijo al principio
    sectionPadre[1].insertBefore(parrafoNuevo, botonVerMas);//agregar el nodo hijo
    
    //cambiar el texto del boton
    botonVerMas.className= "btn btn-outline-danger"
    botonVerMas.innerHTML= "ocultar"
}else{
    console.log("quiero ocultar")
    //eliminar el parrafo creado
    console.log(sectionPadre[1].children[2])
    sectionPadre[1].removeChild(sectionPadre[1].children[2])
    //resetear el boton
    botonVerMas.innerHTML = "ver mas.."
    botonVerMas.className = "btn btn-outline-primary";


}

//NOTA PARA ACCEDER A LOS VALORES DENTRO DE UN IMPUT , NO USAR INNERHTML SINO VALUE
    console.log(document.getElementById("buscador").value)
}