import React from "react"

export const CarruselItems = ({dt}) => {
  console.log(dt);
  return (
      <article className="w-2/4 p-3 lg:h-[220px] xl:h-[260px] 2xl:h-[390px] ">
          <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[180px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src={dt.image} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-semibold" >{dt.country}</h2>
          <h3>{dt.name} </h3>
        </footer>
      </article>      
    )
}

