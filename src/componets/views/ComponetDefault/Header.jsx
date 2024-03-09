const Header = () => {

return(
    <>
        <header className="flex  items-center flex-wrap opacity-75 bg-white px-5 justify-between ">
            <img className="w-[80px] md:order-1 md:w-[90px] xl:w-[130] 2xl:w-[180px]" src="./avionnegro.png" alt="logo"/>
            <nav className="flex gap-3 md:order-3 2xl:gap-10">
                  <a className="font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-5xl" href="">Home</a>
                  <a className="font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-5xl" href="">Cities</a>
                  <a href=""><img  className="w-[30px] md:w-[40px] xl:w-[70] 2xl:w-[90px]" src="./login 3.png" alt="user"/></a>
            </nav>
            <h1 className="text-2xl font-bold w-full text-center md:w-[250px] md:order-2 md:text-3xl lg:grow lg:text-4xl xl:text-5xl xl:w-[400px] 2xl:text-8xl"> My Tinerary</h1>
        </header>
    </>
)
};
export default Header;