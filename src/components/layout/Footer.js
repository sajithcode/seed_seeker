import Image from 'next/image'
import Link from 'next/link';


export default function Footer(){
    return(
        <section className=' footer bg-colorFour flex flex-wrap gap-8 align-middle items-center text-white px-20 py-4'>
            <div className='flex-1 justify-center items-center'>
                <div className='flex justify-center'>
                <Image src={'/agroLogo.png'} width={120} height={120} alt="agro logo" />
                </div>
                <div className='flex justify-center'>
                <p className='text-sm w-[205px] text-justify'>To offer our ultimate gratitude towards this amazing nature by providing the best agricultural plants and products in order sustain a greener future.</p>
                </div>
               
                
            </div>
            <div className='flex-1'>
                <h2 className='pb-3 text-lg '>Usefull Links</h2>
                <ul className='text-sm'>
                    <li>About Us</li>
                    <li>SHOP</li>
                    <li>Contat US</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex-1'>
            <h2 className='pb-3 text-lg '>Categories</h2>
                <ul className='text-sm pt-2'>
                    <li>About Us</li>
                    <li>SHOP</li>
                    <li>Contat US</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex-1'>
            <h2 className='pb-3 text-lg '>Contact Us</h2>
                <ul className='text-sm'>
                    <li>About Us</li>
                    <li>SHOP</li>
                    <li>Contat US</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex-1'>
                <h2 className='text-lg '>Social Links</h2>
                <div className='flex gap-3 mt-5'>
                    
                    <Link href="https://facebook.com/">
                        <Image src={'/facebook.png'} width={39} height={39} />
                    </Link>
                    <Link href="https://www.instagram.com/">
                        <Image src={'/instagram.png'} width={39} height={39} />
                    </Link>
                    <Link href="https://www.youtube.com/">
                        <Image src={'/youtube.png'} width={39} height={39} />
                    </Link>
                </div>
            </div>
        </section>
    );
}