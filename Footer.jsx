
const Footer =()=>{

    return(
    <footer className="flex flex-col text-white  bg-slate-800 pt-3 ">
        <div  className="flex flex-wrap gap-2 justify-center xl:justify-between">
            <nav className="max-lg:order-1 w-[17%] flex flex-col gap-3 md:ml-[20px] 2xl:gap-10 lg:w-[%15]">
                  <a className="font-semibold flex text-xl md:text-2xl xl:text-3xl 2xl:text-5xl" to ="/">Home</a>
                  <a className="font-semibold flex text-xl md:text-2xl xl:text-3xl 2xl:text-5xl" to="/Cities">Cities</a>
            </nav>
            <div className="max-lg:order-4 flex flex-col md:gap-2 max-lg:items-center ">
                <h3 className="flex text-center ">Terms and Conditions</h3>
                    <a className="md:mt-2 underline" to="">TERMS</a>
                <h3 className="flex md:mt-5 md:self-center ">Contacts</h3>
                <a href="mailto:MiTinerayqueries@gmail.com" target="_blank" rel="noopener">Email Inquiries: MiTinerayqueries@gmail.com</a>
                <a href="tel:0800-555-5519" target="_blank" rel="noopener">Customer Support: 0800-555-5519 </a>
            </div>
            <div className="max-lg:order-2 flex flex-col w-[40%] md:w-[20%]">
                <h3 className="flex mb-1 ">Social Networks</h3>
                <nav className=" flex flex-col content-center justify-center gap-1 w-[60%]">
                    <a href="https://www.instagram.com/"target="_blank" rel="noopener"  className="flex  w-full "><img className="w-[50%] pr-[10px]"  src="ig.png" alt="instagram" />Instagram</a>
                    <a href="https://twitter.com/?lang=es"target="_blank" rel="noopener"  className="flex  w-full" ><img className="w-[50%] pr-[10px]" src="tw.png" alt="twitter" />Twitter</a>
                    <a href="https://www.facebook.com/?locale=es_LA"target="_blank" rel="noopener" className="flex w-full " ><img className="w-[50%] pr-[10px]" src="fb.png" alt="facebook" />Facebook</a>
                    <a href="https://www.whatsapp.com/?lang=es_LA"target="_blank" rel="noopener" className="flex w-full "><img className="w-[50%] pr-[10px]" src="wpp.png" alt="whatsapp" />Whatsapp</a>
                    <a href="https://ar.linkedin.com/"target="_blank" rel="noopener"  className="flex w-full"><img className="w-[50%] pr-[10px]" src="lin.png" alt="linkedin" />Linkedin</a>
                </nav>
            </div>
            <div className="max-lg:order-3 text-center flex  w-[30%] justify-self-end">
                <p className="w-[300px] font-semibold lg:text-3xl">" We Work every day to improve your<br></br>
                experience. Bringing new and better adventures "
                </p>
            </div>
        </div>
        <p className="max-lg:order-5 w-full rounded-xl text-center text-lg font-semibold text-withe lg:text-lg 2xl:text-4xl 2xl:font-bold">MindHub-Accenture<br></br>@Lucas Scarone</p>
    </footer>
    )
}
export default Footer;