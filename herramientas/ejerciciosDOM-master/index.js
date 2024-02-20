// capturando el H1, mediante un ID, en una variable llamada "titulo"
const titulo =document.getElementById("h1")
// cambiando el titulo afrutas
const tituloPrincipal= "Frutas"
titulo.innerText = tituloPrincipal


// Capturar el header y el footer, mediante la misma clase, y cambiarles el 
// color a naranja.

document.querySelector("header").className="bg-yellow-500"
document.querySelector("body footer").className="bg-yellow-500"

// 4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 

document.querySelector("footer p").innerHTML="Lucas Scarone ©"

// 5. Crear un div dentro del main y agregarle el id "contenedor". 
// Capturar ese div por medio de su id.

const main=document.querySelector("main")
main.innerHTML+=`
<div id= "contenedor">

</div>`

div=document.getElementById("contenedor")
div.className="flex flex-wrap content-center pl-5 gap-2"

// 6. Crear una función que devuelva la estructura de una card.
//  La función debe devolver un string para más adelante utilizar innerHTML. 
// La card debe contener los siguientes datos: nombre, foto y descripcion


function cars(frutas) {
    return `
    <article class="flex flex-col w-1/4 border border-black ">
        <h3 class="text-center">${frutas.nombre}</h3>
        <img class="" src="${frutas.foto}" alt="${frutas.nombre}">
        <p>
           ${frutas.descripcion}
        </p>
    </article> `
    
}

// console.log( cars(frutas[0]));
 
// 7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para
// crear cards con los datos de las frutas, utilizando la función del punto 6. 
// (Este bucle podría meterse en otra función y recibir el array por parámetro).
let createcars=""
for (const frutasIteradas of frutas) {
    createcars +=cars(frutasIteradas)
}

// 8. Mostrar las cards con los datos pedidos en el div "#contenedor". 

div.innerHTML = createcars

// 9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo 
// mediante ese id. Agregar al div el título "Frutas Dulces".


function crearDiv(main) {
    const div = document.createElement('div')
    div.setAttribute("id" ,"lista")
    
    const h3 =document.createElement('h3')
    
    const data= "Lista de Frutas"
    h3.textContent += data
    div.append(h3)
    return div
}

main.appendChild(  crearDiv()  )


// 10.Crear una función que reciba un array y devuelva una lista
//  desordenada utilizando nodos (create    Element). Cada elemento de la 
//  lista será el nombre de una fruta. Para esta lista usar las frutas 
//  cuya propiedad "esDulce" sea true. 

function crearList() {

     const lista= document.createElement('ul')
     const elementoli= document.createElement('li')
     
     lista.appendChild(elementoli)
    // for (const elementoli of frutas) {
    //     if (frutas.esDulce == true) {
    //         elementoli=document.createElement('li')
    //         elementoli.textContent = frutas.nombre
    //         lista.appendChild(elementoli)
    //     }
    // }
     console.log(lista); 
}

crearList([frutas])