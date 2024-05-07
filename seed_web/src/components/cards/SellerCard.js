import Image from 'next/image'

export default function SellerCard({name, sellerID, productLocation}){
    return(
        <div>
            <div className='bg-gray-200  rounded-[25px] py-3 my-4'>
                <div className='text-right'>
                <button className='bg-colorThree text-white rounded-[10px] w-[121px] h-[26px]'>{productLocation}</button>
                </div>
                
                <Image src={'/sellerPhoto.png'} width={353} height={250}/>
                <div className='mt-3 pl-3'>
                    <h3 className=' text-lg font-semibold'>{name}</h3>
                    <h4 className='text-sm my-2'>{sellerID}</h4>
                    <button className='bg-secondary text-white w-[120px] h-[36px] rounded-[15px]'>Review</button>
                </div>
                
            </div>
        </div>
    );
}