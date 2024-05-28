import ProductCard from "../cards/ProductCard";


export default function FeaturedItems(){
    return(
        <section className="my-8 mx-20">
            <div className="text-center text-[36px] font-medium mb-4">
                <h2>Featured Items </h2>
            </div>
            <div className="flex justify-evenly gap-4 flex-wrap">
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'NuwaraEliya'}/>
                <ProductCard ProductName={'Pumkin Seeds'} quantity={'20000-50000 kg'} productLocation={'Ratnapura'}/>
                <ProductCard ProductName={'Chia Seeds'} quantity={'20000-50000 kg'} productLocation={'Badulla'}/>
                
            </div>
        </section>
    );
}