import { CarruselSlimes } from "./Carrusel/CarruselSlimes"


export const Main = () => {
  
  const prev =()=>{}
  const next =()=>{}
  
  return (
    <main className="flex grow min-h-screen items-center justify-center">
    <button onClick={prev} className="items-center h-[200px] lg:h-[280px] xl:w-[120px] xl:h-[400px] "><img className="w-[50px] h-2/3 xl:w-[80px] 2xl:w-[100px]" src="./flecha.izquierda.png" alt=""/></button>
      <CarruselSlimes ></CarruselSlimes>
    <button onClick={next} className="h-[200px] lg:h-[280px] xl:w-[120px] xl:h-[400px]"><img className="w-[50px] h-2/3 xl:ml-[35px] xl:w-[80px] 2xL:w-[100px]" src="./flecha.derecha.png" alt=""/></button>
    </main>
  )
}

