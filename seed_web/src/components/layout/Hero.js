export default function Hero(){
    return(
        <section className="hero-section flex items-center justify-items-center  px-20 text-black">
            <div className=" ml-10">
            <h1 className="text-3xl md:text-5xl font-bold	text-gray-900  justify-start">
            Quality Seed Find, <br />
            Explore <br />
            & Review<br />
            </h1>
            <div className="mt-6">
                <button className="bg-colorThree text-white px-10 my-2 py-2 text-sm lg:text-lg rounded-full font-semibold mr-4">FIND</button>
                <button className="bg-black text-white px-10 py-2 text-sm lg:text-lg rounded-full font-semibold">Register</button>
            </div>
            </div>
            
        </section>
    );
}