"use client";
import Image from 'next/image'
import { useState } from 'react';

export default function ProductCard({ProductName, quantity, productLocation, contactDetails}){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return(
        <>
        <div>
            <div className='bg-gray-200  rounded-[25px] py-3 my-4'>
                <div className='text-right'>
                <button className='bg-colorThree text-white rounded-[10px] w-[121px] h-[26px]'>{productLocation}</button>
                </div>
                
                <Image src={'/chia-seeds.png'} width={353} height={250}/>
                <div className='mt-3 pl-3'>
                    <h3 className=' text-lg font-semibold'>{ProductName}</h3>
                    <h4 className='text-sm my-2'>{quantity}</h4>
                    <button onClick={toggleModal} className='bg-secondary text-white w-[120px] h-[36px] rounded-[15px]'>
                        Contact seller
                    </button>
                 </div>
                </div>
  
        </div>
             {modal && (

                    <div id="modelConfirm" className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
                        <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

                            <div className="flex justify-end p-2">
                                <button onClick={toggleModal} type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="p-6 pt-0 text-center">
                                <Image src={'/green_phone.png'} width={30} height={30} alt='phone' className="mx-auto"/>
                                <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">+94{contactDetails}</h3>
                                <button onClick={toggleModal}
                                    className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                                    data-modal-toggle="delete-user-modal">
                                    close
                                </button>
                            </div>

                        </div>
                    </div>
             
                                )}
        </>
    );
}