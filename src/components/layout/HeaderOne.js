import Image from 'next/image'



export default function HeaderOne(){
    return(
        <section className=" md:flex justify-between px-20 py-3 bg-secondary text-white text-sm">
            <div className=''>
                <h1>Welcome Seed Seeking Website in Sri Lanka</h1>
            </div>
            <div className="hidden lg:block">
            <div className='flex-none md:flex gap-4'>
                <div className='flex gap-2'>
                <Image src={'/fblogo.png'} width={14} height={18} alt='facebook logo'/>
                <Image src={'/email.png'} width={16} height={12} alt='email logo' />
                <Image src={'/whatsapp.png'} width={21} height={21} alt='whatsapp logo'/>
                </div>
                <div className='border-x-2'></div>
                <div><p>+94 705316266</p></div>
                
            </div>
            </div>
            
        </section>
    );
}