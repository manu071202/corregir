function cambiarTitulo(){
    console.log("desde la funcion cambiar titulo");
    //traer el h1 del maquetadoc
    let TituloPrincipal = document.querySelector("#Titulo")
    console.log(TituloPrincipal)
    TituloPrincipal.innerHTML = "un nuevo titulo"
    TituloPrincipal.className = "colonuevo display-4"
}

function verMas(){

    let botonVermas = document.getElementById("btnVermas")
    console.log(botonVermas)
    let sectionPadre = document.getElementsByClassName("container")

    if(botonVermas.innerHTML === "ver mas.."){

        //crear el parrafo ,agregar o insertar este nuevo elemento
        //crear el parrafo primera forma
//    let parrafoNuevo = document.createElement("p");
    //preparar el elemento
  //  parrafoNuevo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi illum, error atque vitae, iure cumque molestias suscipit dolores vel ipsam dolorum dolore. Quisquam voluptatum, illum, repellendus est voluptates, soluta nostrum non inventore odio aliquam perferendis excepturi voluptas quam magni ipsam. Corrupti sunt, ut vel voluptas exercitationem velit natus architecto."
    //parrafoNuevo.className = "lead"
   // console.log(parrafoNuevo)

    //traer el elemento padre
   // console.log(sectionPadre[1])
    //agregar o insertar en dom
   // sectionPadre[1].appendChild(parrafoNuevo) //agreaga el nodo hijo al final
    //sectionPadre[1].appendChild(parrafoNuevo) //agregar el nodo hijo al principio

    //SEGUNDA FOTMA PARA CREAR UN PARRAFO
    let parrafoNuevo = `<p class= "lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta in sit, reprehenderit similique minus vitae illo reiciendis ex! Maxime labore fugit qui unde, quae nobis vel ipsum! Impedit, esse.</p>`

    sectionPadre[1].innerHTML = parrafoNuevo


    
    //cambiar el texto del boton
    botonVermas.className = "btn btn-outline-danger"
    botonVermas.innerHTML = "ocultar"
}else{
    console.log("aqui quiero borrar u ocultar el parrafo")
    console.log(sectionPadre[1].childrem[2])
    sectionPadre[1].insertBefore(sectionPadre[1].childrem[2])
}


sectionPadre[1].insertBefore(parrafoNuevo, document.getElementById("btnVermas"))//agregar el nodo hijo
}