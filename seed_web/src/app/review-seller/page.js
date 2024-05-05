import SellerCard from '@/components/cards/SellerCard';
import './review-seller.css'

export default function ReviewSeller(){
    return(
        <section>
            <div className='flex gpa-4 justify-evenly flex-wrap mx-20'>
                <SellerCard name={'K.Nimal'} sellerID={'id: 345678'} productLocation={'NuwaraEliya'}/>
                <SellerCard name={'K.Supun'} sellerID={'id: 345678'} productLocation={'Ratnapura'}/>
                <SellerCard name={'L.Pathmasiri'} sellerID={'id: 345678'} productLocation={'Badulla'}/>
                <SellerCard name={'K.Nimal'} sellerID={'id: 345678'} productLocation={'NuwaraEliya'}/>
                <SellerCard name={'K.Supun'} sellerID={'id: 345678'} productLocation={'Ratnapura'}/>
                <SellerCard name={'L.Pathmasiri'} sellerID={'id: 345678'} productLocation={'Badulla'}/>
            </div>
        </section>
    );
}