import { Link } from "react-router-dom";

const Hero =()=>{

    return(
        <>
            <div id="Hero" className="w-full min-h-screen flex flex-col items-center justify-center ">
                <div className="flex px-[5px] bg-white opacity-65">
                  <h2 className="text-2xl text-center font-bold lg:text-3xl xl:text-5xl 2xl:text-8xl">Find  your perfect trip, designed by insiders who know and love their cities</h2>
                </div>
                <Link className="flex flex-col mt-[100px] w-3/4 items-center text-center md:flex-row md:text-md font-bold backdrop-blur-md md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl 2xl:justify-center" to="./Cities">You are just one click away from your next adventure, come look!!<img className="w-[150px] xl:w-[180] 2xl:w-[220px]" src="./ticket-removebg-preview.png" alt=""/></Link>
            </div>
        </>
    )
};
export default Hero;