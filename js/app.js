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
    //     let parrafoNuevo = document.createElement("p"); //<p></p>
    //     //  preparar el elemento
    //     parrafoNuevo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi illum, error atque vitae, iure cumque molestias suscipit dolores vel ipsam dolorum dolore. Quisquam voluptatum, illum, repellendus est voluptates, soluta nostrum non inventore odio aliquam perferendis excepturi voluptas quam magni ipsam. Corrupti sunt, ut vel voluptas exercitationem velit natus architecto."
    // parrafoNuevo.className = "lead"
    // console.log(parrafoNuevo)
    
    // //traer el elemento padre
    // console.log(sectionPadre[1]);
    // //agregar o insertar en dom
    // //sectionPadre[1].appendChild(parrafoNuevo) //agreaga el nodo hijo al final
    // //sectionPadre[1].prepend(parrafoNuevo) //agregar el nodo hijo al principio
    // sectionPadre[1].insertBefore(parrafoNuevo, botonVerMas);//agregar el nodo hijo
    
    //SEGUNDA MANERA PARA CREAR UN PARRAFO (PARA ELEMENTOS MAS GRANDES)
    //cambiar el texto del boton
    botonVerMas.className= "btn btn-outline-danger"
    botonVerMas.innerHTML= "ocultar"
    let parrafoNuevo= `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa expedita provident, omnis similique vitae cumque ea fugit harum nesciunt recusandae, inventore magnam molestiae ducimus dolorem, consequuntur beatae rerum quam hic reiciendis sequi dolorum! Excepturi, nesciunt! Autem, illum at? Numquam consequuntur sint non ea quo maxime corporis facere pariatur assumenda. Nesciunt molestias praesentium autem laudantium ratione animi facere tenetur. Saepe impedit dolorum mollitia quos assumenda excepturi suscipit laborum, harum voluptatum provident? Minima officiis, maxime repellendus dolorum ullam nesciunt quas fuga voluptates, accusantium nemo maiores doloribus libero totam numquam? Veniam doloremque itaque amet iusto placeat tenetur eveniet eligendi dolores odio accusamus. Ab alias aliquid ex deleniti obcaecati rem eligendi, esse mollitia ut, natus hic officiis error atque, delectus tempora saepe modi eum! Dolor, deleniti iusto, ea facilis voluptatum qui, perspiciatis ipsam porro vero ipsum possimus totam necessitatibus rerum ab. Atque dolorem, tempora sequi vero, doloribus cupiditate quae eveniet facere numquam ab fuga provident obcaecati eaque asperiores rem iste error placeat laborum delectus rerum at. Quidem dolore quae necessitatibus quos qui iure asperiores fugiat voluptatem facere odio soluta nulla, labore consequuntur natus possimus quasi error velit a officia ab iste illum. Inventore repellat voluptas ex vero distinctio dolores impedit blanditiis optio nulla?</p>`
    
    sectionPadre[1].innerHTML += parrafoNuevo //sectionPadre[1].innerHTML= sectionpadre[1].innerHTML +parrafoNuevo
    

}else{
    console.log("quiero ocultar")
    //eliminar el parrafo creado
    console.log(sectionPadre[1].children[3])
    sectionPadre[1].removeChild(sectionPadre[1].children[3])
    //resetear el boton
    botonVerMas.innerHTML = "ver mas.."
    botonVerMas.className = "btn btn-outline-primary";


}

//NOTA PARA ACCEDER A LOS VALORES DENTRO DE UN IMPUT , NO USAR INNERHTML SINO VALUE
    console.log(document.getElementById("buscador").value)
}