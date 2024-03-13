import React from 'react'
import { Link } from 'react-router-dom'

export const CityCard = ({CT}) => {
  return (
    <article className="w-2/4 m-3  md:w-2/6 lg:w-1/4 lg:h-[220px] xl:h-[250px] 2xl:h-[440px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[170px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src= {CT.image} alt=""/>
        <footer className="pl-3 bg-slate-800 text-white backdrop-blur-sm line-clamp-3 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-bold" >{CT.country}</h2>
          <h3 className='font-semibold' >{CT.name} </h3>
          <Link to={"/Cities/" + CT._id}
          className='flex justify-center text-green-400 font-bold'>
          See more ...</Link>
        </footer>
    </article>   
    )
}
