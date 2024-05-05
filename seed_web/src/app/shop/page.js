import ProductCard from '@/components/cards/ProductCard';
import './shop.css'

export default function ShopPage(){
    return(
        <section>
            <div className='flex gpa-4 justify-evenly flex-wrap mx-20'>
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'NuwaraEliya'}/>
                <ProductCard ProductName={'Pumkin Seeds'} quantity={'20000-50000 kg'} productLocation={'Ratnapura'}/>
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'Badulla'}/>
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'NuwaraEliya'}/>
                <ProductCard ProductName={'Pumkin Seeds'} quantity={'20000-50000 kg'} productLocation={'Ratnapura'}/>
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'Badulla'}/>
                
            </div>
        </section>
    );
}