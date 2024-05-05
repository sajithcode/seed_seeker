import SellerCard from "../cards/SellerCard";

export default function TopSellers(){
    return(
        <section className="my-6 mx-20">
            <div className="text-center text-[36px] font-medium mb-4">
                <h2>Top Rated Sellers</h2>
            </div>
            <div className="flex justify-evenly gap-4 flex-wrap">
                <SellerCard name={'K.Nimal'} sellerID={'id: 345678'} productLocation={'NuwaraEliya'}/>
                <SellerCard name={'K.Supun'} sellerID={'id: 345678'} productLocation={'Ratnapura'}/>
                <SellerCard name={'L.Pathmasiri'} sellerID={'id: 345678'} productLocation={'Badulla'}/>
            </div>
        </section>
    );
}