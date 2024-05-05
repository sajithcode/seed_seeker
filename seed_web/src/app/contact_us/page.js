import Image from "next/image";
import './contact_us.css';

export default function ContactUs() {
    return(
        <section>
            <div id="contactUs-bg" className="flex items-center justify-center 
             poppins-extrabold text-white text-5xl
             leading-72">
                <p>Contact Us</p>
            </div>

            <div className="flex flex-wrap justify-evenly my-16">
                <div>
                    <p className="text-transform: uppercase text-3xl flex items-center
                    justify-start mb-2">Our address</p>
                    <hr className="h-px bg-gray-500 border-0 mt-4 mb-4"></hr>
                    <p className="text-colorSix">No 88/A/6,  palliyapara, <br></br> 
                    Ratnapura, Sri Lanka</p>
                    <hr className="h-px bg-gray-500 border-0 mt-4 mb-4"></hr>

                    <div className="flex gap-4">
                        <p>Email:</p>
                        <p className="text-colorSix">agroseeds@gmail.com</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Email:</p>
                        <p className="text-colorSix">info@agroseeds.lk</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Phone:</p>
                        <p className="text-colorSix">+94 705316266</p>
                    </div>
                    <p className="mt-4 text-transform: uppercase text-xl mb-2">Contact us</p>
                    <hr className="h-px bg-gray-500 border-0 mt-4 mb-4"></hr>
                    <p className="text-colorSix text-md">No 88/A/6, College of technology Road,<br></br>
                    Ratnapura , Sri Lanka</p>

                    <button className="mt-10 mb-24 text-transform: uppercase bg-colorThree text-white text-sm text-center
                    w-[278px] h-[50px]">Write a Review</button>
                </div>
                <div className="mb-24">
                    <Image src={"/Rectangle.png"} width={740} height={559} alt="map"></Image>
                </div>
            </div>
        </section>
    );
}