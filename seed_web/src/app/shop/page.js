"use client";
import ProductCard from '@/components/cards/ProductCard';
import './shop.css'
import { useEffect, useState } from 'react';




export default function ShopPage({seeds}){
    const [seedItems, setSeedItems] = useState([]);

    useEffect(() => {
        fetch('/api/SeedItems').then(res => {
            res.json().then(seedItems => setSeedItems(seedItems));
        })
    }, []);

    console.log(seedItems);
    return(
        <section>
            <div className='flex gpa-4 justify-evenly flex-wrap mx-20'> 

            {seedItems.map(item => (
                <ProductCard
                    ProductName={
                        item.seedType
                    } 
                    quantity={item.amount}
                    productLocation={item.location}
                    contactDetails={item.contactDetails}
                ></ProductCard>
            ))}
                    
            </div>
        </section>
    );
}