import Link from 'next/link';

export default function HeaderThree(){

    return(
        <section className='py-3  border-b-2'>
            <ul className='flex gap-3 items-center justify-center'>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/review-seller">REVIEW SELLER</Link></li>
                <li><Link href="/shop">SHOP</Link></li>
                <li><Link href="/contactus">CONTACT US</Link></li>

            </ul>
        </section>
    );
}