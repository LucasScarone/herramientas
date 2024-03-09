import { citys } from "../../../../data/data"
import React from 'react'

export const CarruselSlimes = () => {
    const dat=citys.slice(4,8)
    console.log(dat);

  return (
    <div  className="w-4/5 h-full flex flex-wrap 2xl:h-[900px] ">
    <h1 className=" text-2xl bg-white opacity-65 rounded-2xl font-semibold w-full text-center lg:text-3xl xl:text-4xl 2xl:text-7xl">Popular MY TINERARIES</h1>
    <article className="w-2/4 p-3 lg:h-[220px] xl:h-[260px] 2xl:h-[390px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[180px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src={dat[0].imagen} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-semibold" >{dat[0].país}</h2>
          <h3>{dat[0].nombre} </h3>
        </footer>
    </article>        
    <article className="w-2/4 p-3 lg:h-[220px] xl:h-[260px] 2xl:h-[390px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[180px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src={dat[1].imagen} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-semibold" >{dat[1].país}</h2>
          <h3>{dat[1].nombre} </h3>
        </footer>
    </article>        <article className="w-2/4 p-3 lg:h-[220px] xl:h-[260px] 2xl:h-[390px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[180px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src={dat[2].imagen} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl "> 
          <h2 className="font-semibold" >{dat[2].país}</h2>
          <h3>{dat[2].nombre} </h3>
        </footer>
    </article>        
    <article className="w-2/4 p-3 lg:h-[220px] xl:h-[260px] 2xl:h-[390px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[180px] 2xl:h-[340px] 2xl:text-3xl rounded-t-2xl" src={dat[3].imagen} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-semibold" >{dat[3].país}</h2>
          <h3>{dat[3].nombre} </h3>
        </footer>
    </article>  
</div>
  )
}
