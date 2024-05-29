"use client";
import Image from 'next/image'
import Link from 'next/link';
import './HeaderTwo.css';
import { signOut, useSession } from 'next-auth/react';

export default function HeaderTwo(){
    const session = useSession();
    console.log(session);
    const status = session.status;
    
    return(
        <section className=' px-20 bg-primary flex  items-center justify-between'>
            <Link href="/" >
                <Image src={'/agroLogo.png'} width={120} height={120} alt='agrologo' />
            </Link>
            <div className='search hidden lg:block'>
                <input  className='placeholder'  type="text" placeholder='Search of product'/>
            </div>
            {status === 'authenticated' && (
                <div className='text-white bg-colorThree rounded-full px-8 py-2'>
                    <button onClick={() => signOut()}>Logout</button>
                </div>
            )} 
            {status === 'unauthenticated' && (
                 <div className='text-white bg-colorThree rounded-full px-8 py-2'>
                    <Link href={'/login'}>Login/Register</Link>
                </div>
            )}
       </section>
    );
}
