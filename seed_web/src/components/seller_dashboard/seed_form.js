"use client";
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link'



const SeedForm = () => {
    const [seedType, setSeedType] = useState('');
    const [amount, setAmount] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [location, setLocation] = useState('');
    const [productcreate, setProduct] = useState(false);
    const [error, setError] = useState(false);

    function  resetForm (){
        setSeedType("");
        setAmount("");
        setContactDetails("");
        setLocation("");
    }
    
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setProduct(false);

        const formData = {seedType, amount, contactDetails, location};

        const response = await fetch('/api/SeedItems', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'content-type': 'application/json' }
        })

        if(response.ok){
            setProduct(true);
            
        }else{
            setError(true);
        }

        resetForm();
        
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='pb-4 text-center'>
            {productcreate && (
                        <div className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert text-center"'>
                            <span className='font-bold'>Product created.</span><br/> Now you can check your orders{' '}
                             <Link className='underline' href={'/orders'}>Shop &raquo;</Link>
                        </div>
                    )}
                    {error && (
                        <div  role='alert'>

                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error.</div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">please try again later.</div>
                            
                        </div>
                    )}
            </div>
            <div className='md:flex md:items-center mb-6'>
                <div class="md:w-1/3">
                    <label className='block  md:text-right mb-1 md:mb-0 pr-4'  htmlFor="seedType">Seed Type:</label>
                </div>
                <div class="md:w-2/3">
                    <select className='block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' id="seedType" value={seedType} onChange={(e) => setSeedType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="pumpkin seeds">pumpkin seeds</option>
                        <option value="chia seeds">chia seeds</option>
                        <option value="cabbage seeds">cabbage seeds</option>
                    </select>
                </div>
                
            </div>
            
            <div className='md:flex md:items-center mb-6'>
                <div class="md:w-1/3">
                    <label htmlFor="amount"  className='block  md:text-right mb-1 md:mb-0 pr-4'>Amount:</label>
                </div>
                <div class="md:w-2/3">
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name' type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                
            </div>
<div className='md:flex md:items-center mb-6'>
                <div class="md:w-1/3">
                    <label className='block  md:text-right mb-1 md:mb-0 pr-4' htmlFor="pricePerUnit">Contact details:</label>
                </div>
                <div class="md:w-2/3">
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name' type="text" id="Contact details" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} required />
                </div>
                
            </div>
            
            <div className='md:flex md:items-center mb-6'>
                <div class="md:w-1/3">
                    <label className='block  md:text-right mb-1 md:mb-0 pr-4' htmlFor='location'>Location:</label>
                </div>
                <div class="md:w-2/3">
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name' type='text' id='location' value={location} onChange={(e) => setLocation(e.target.value)} required/>
                </div>
                
            </div>
            
            <div className='md:flex md:items-center mb-6'>
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button className="bg-colorThree text-center  w-[300px] h-[50px] py-2 rounded-[30px]" type="submit" >Submit</button>
                </div>
                
            </div>
        </form>
    );
};

export default SeedForm;