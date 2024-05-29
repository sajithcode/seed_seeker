"use client";
import SellerCard from '@/components/cards/SellerCard';
import './review-seller.css'
import { useEffect, useState } from 'react';

export default function ReviewSeller(){
    const [createdUser, setCreatedUser] = useState([]);

useEffect(() => {
        fetch('/api/getUsers')
        .then(res => {res.json()
        .then(data => setCreatedUser(data))
        .catch(error => console.error('Error fetching users:', error));
        })
    }, []);
    return(
        <section>
            <div className='flex gpa-4 justify-evenly flex-wrap mx-20'>

                {createdUser.map(user => (
                    <SellerCard name={user.username}
                    sellerID = {user._id}
                    productLocation = {"HongKong"}></SellerCard>

                ))}
            </div>
        </section>
    );
}