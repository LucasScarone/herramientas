import React, { useEffect, useState } from 'react'
import { GetCityData } from '../../service/CityData'
import { CarruselItems } from './CarruselItems'


export const CarruselComplet = () => {
    const [CTS, setCTS]= useState([])
    const[Citys, setCitys]=useState([])
    const [Indice, setIndice]= useState(0)

    useEffect(()=>{GetCityData().then((respons)=>{
        const datos= respons.slice(0, 12)
        
        const Slimes=divArray(datos)
        setCTS(Slimes)
        setCitys(Slimes[0])

    })},[])

    
    




    const CTSCard = Citys.map((CT)=>(
        <CarruselItems key={CT._id} dt={CT} />
      ))



    
    const divArray =(datos) =>{
        const array1= datos.slice(0,4)
        const array2=datos.slice(4,8)
        const array3=datos.slice(8,12)
        return [array1,array2,array3]
    }



    const next =()=>{
        let slimes = Indice === 2 ? 0 : Indice +1
        setIndice(slimes)
        setCitys(CTS[slimes])
    }



    const prev =()=>{
        let slimes = Indice === 0 ? 2 : Indice -1
        setIndice(slimes)
        setCitys(CTS[slimes])
    }


  return (
    <div className='w-11/12 h-full flex flex-grow justify-between items-center'>
        <button onClick={prev} className="flex justify-star items-center  w-1/6 h-[200px] lg:h-[280px] xl:w-[120px] xl:h-[400px] "><img className="w-[50px] h-2/3 lg:w-[60px] xl:w-[80px] 2xl:w-[100px]" src="./flecha.izquierda.png" alt=""/></button>
        <div  className="w-4/6 h-full flex flex-wrap 2xl:h-[900px] ">
            <h1 className=" text-2xl bg-white opacity-65 rounded-2xl font-semibold w-full text-center lg:text-3xl xl:text-4xl 2xl:text-7xl">Popular MY TINERARIES</h1>
            {CTS.length > 0 && CTSCard}
        </div>
        <button onClick={next} className="flex justify-end items-center h-[200px] w-1/6 lg:h-[280px] xl:w-[120px] xl:h-[400px]"><img className="w-[50px] h-2/3 lg:w-[60px]  xl:w-[80px] 2xL:w-[100px]" src="./flecha.derecha.png" alt=""/></button>
    </div>
  )
}
