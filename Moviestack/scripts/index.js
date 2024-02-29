import {renderCards, createCard } from './module/funcione.js'

let peliculas=[]

const div= document.getElementById("content")

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
    const PeliculasconFavs= peliculas.map(peliculas =>{
        return{
            ...peliculas,
            favs: true
        }
    })
    


    renderCards(PeliculasconFavs, div, createCard)

    const genres= PeliculasconFavs.map(pelicula => pelicula.genres).flat()

const genresSinRepetidos= []
genres.forEach ( genres =>{
    if(!genresSinRepetidos.includes(genres)){
        genresSinRepetidos.push(genres)
    }
})

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
    const peliFiltradoXTiTulo= filtrarpeliculasporTitulo(PeliculasconFavs, inputBusqueda.value)
    const filtarPeliXgenres = filtarPeliculasXgenres (peliFiltradoXTiTulo, select)
    renderCards(filtarPeliXgenres, div, createCard );
})

const select = document.getElementById('select')


function filtrarpeliculasporTitulo(ListadePeliculas, title) {
   return ListadePeliculas.filter(PeliculasconFavs => PeliculasconFavs.title.toLowerCase().startsWith(title.toLowerCase()))
} 


select.addEventListener( 'change', ()=>{
    const peliculasfiltradasXgenres= filtarPeliculasXgenres(PeliculasconFavs, select)
    const peliFiltradoXTiTulo= filtrarpeliculasporTitulo(peliculasfiltradasXgenres, inputBusqueda.value)

    renderCards(peliFiltradoXTiTulo, div, createCard)
})

function filtarPeliculasXgenres(ListadePeliculas, select){
    console.log(select.value)
    if (select.value === "all") {
        return ListadePeliculas
    }
    return ListadePeliculas.filter(PeliculasconFavs => PeliculasconFavs.genres.includes(select.value))
}

const boton= document.getElementById('content')

const listFavs=[]
console.log(listFavs);
boton.addEventListener('click',(e)=>{
    if(e.target.tagName == 'BUTTON'){
        console.log(e.target.parentElement)
        e.target.classList.add("bg-red-500")
        const peliculaFavs= e.target.attributes[1].value
        listFavs.push(peliculaFavs)
        console.log(listFavs);
    }
} )



})



