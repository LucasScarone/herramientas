
import {renderCards, createCard } from './module/funcione.js'

let peliculas=[]


const div= document.getElementById("content")


/* Trabajando con nodos */
// function createCard( movies ){
//     // agregando el url a la imagen
//     const url='https://moviestack.onrender.com/static/'+ movies.image
//     /* Creo el nodo <article> */
//     /* document.createElement( elemento ) */
//     const article = document.createElement( 'article' )
//     /* Le agrego las clases */
//     article.className = "w-[233px] h-[131]  md:w-[283px] md:h-[181] p-2 border-4 border-[#6D38E0] m-1 rounded bg-black text-white"

//     /* Creo el nodo <img> */
//     const img = document.createElement( "img" )
//     /* Agrego atributo src a la imagen */
//     /* setAttribute */
//     img.setAttribute( "src", url )

//     /* Agrego atributo alt */
//     img.setAttribute( "alt", movies.name )

//     const h3 = document.createElement('h3')
//     h3.textContent = movies.name

//     h3.classList.add( "flex", "flex-col", "text-center", "font-bold" )

//     const h4 = document.createElement('h4')
//     h4.textContent = movies.title
//     h4.classList.add("font-semibold")

//     const p = document.createElement( 'p' )
//     p.innerHTML = "Descripcion:"
//     p.classList.add("font-semibold")

//     const p2 = document.createElement( 'p' )
//     p2.textContent = movies.overview
//     p2.classList.add("line-clamp-3")
     
//     const a= document.createElement('a')
//     a.setAttribute('class', "font-semibold text-[#6D38E0]")
//     a.innerHTML = "See more..."
//     a.setAttribute('href', `./detalles.html?id=${movies.id}`)

//     /* element.append me permite agregar varios a la vez */
//     article.append( img, h3, h4, p, p2, a)

//     return article
// } 


// function renderCards( movies, element, fn ){

//     const fragment = document.createDocumentFragment()
//     if (movies.length == 0) {
//         return element.innerHTML = `<h2>There are no movies with these filters</h2>`
//     }
//     for (const iterator of movies) {
//         /* Ejecuto la funcion que crear el nodo */
//         const newArticle = fn( iterator ) 
//         /* Agrego el nodo al elemento */
//         fragment.appendChild( newArticle )
//     }
//     element.innerHTML = "" 
//     element.appendChild( fragment )

// }

// renderCards( peliculas, div, createCard )

const div2=document.getElementById('contentselect')


const inputBusqueda = document.getElementById('inputBusqueda')


const url='https://moviestack.onrender.com/api/movies'
const init = {
    method: "GET",
    headers:{
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}


fetch(url,init)
.then(response => response.json())
.then((data)=>{
    peliculas = data.movies
    renderCards(peliculas, div, createCard)


    const genres= peliculas.map(pelicula => pelicula.genres).flat()

const genresSinRepetidos= []
genres.forEach ( genres =>{
    if(!genresSinRepetidos.includes(genres)){
        genresSinRepetidos.push(genres)
    }
})

console.log(peliculas)

function creareOption(params) {
    const option =document.createElement('option')
    option.setAttribute('value', `${params}`)
    option.textContent = params
    return option
    
}
function crearselect( array, element, fn ){
    const select = document.createElement( 'select' )
    select.setAttribute('class', 'bg-[#D2CCFF] h-9 w-full border border-[#6D38E0] rounded xl:h-[60px] xl:border-2 xl:text-xl 2xl:text-3xl 2xl:h-[80px]')
    select.setAttribute('id', 'select')
    const option =document.createElement('option')
    option.setAttribute('value', 'all')
    option.textContent = 'All'
    select.appendChild(option)
    for (const iterator of array) {
        /* Ejecuto la funcion que crear el nodo */
        const newOption = fn( iterator ) 
        /* Agrego el nodo al elemento */
        select.appendChild( newOption )
    }
    element.appendChild( select )
    
}

crearselect(genresSinRepetidos, div2, creareOption)

inputBusqueda.addEventListener('input',()=>{
    const peliFiltradoXTiTulo= filtrarpeliculasporTitulo(peliculas, inputBusqueda.value)
    const filtarPeliXgenres = filtarPeliculasXgenres (peliFiltradoXTiTulo, select)
    renderCards(filtarPeliXgenres, div, createCard );
})

const select = document.getElementById('select')


function filtrarpeliculasporTitulo(ListadePeliculas, title) {
   return ListadePeliculas.filter(pelicula => pelicula.title.toLowerCase().startsWith(title.toLowerCase()))
} 


select.addEventListener( 'change', ()=>{
    const peliculasfiltradasXgenres= filtarPeliculasXgenres(peliculas, select)
    const peliFiltradoXTiTulo= filtrarpeliculasporTitulo(peliculasfiltradasXgenres, inputBusqueda.value)

    renderCards(peliFiltradoXTiTulo, div, createCard)
})

function filtarPeliculasXgenres(ListadePeliculas, select){
    console.log(select.value)
    if (select.value === "all") {
        return ListadePeliculas
    }
    return ListadePeliculas.filter(pelicula => pelicula.genres.includes(select.value))
}
})



// notas crear un evento e tipo clictk
// cuando detecte el click tome el id
// data- para generar una propiedad y ponerle el id
// para conectactar con el article y el icono del click
// target.dataset.accion para ver donde ocurre el evento 

// agregarlo a la card