import SeedForm from '@/components/seller_dashboard/seed_form'; 

const SellerDashboard = () => {
    return (
        <div className='text-center py-5 bg-green-700'>
            <h1 className='text-3xl block text-white'>Seller Dashboard</h1>
            <div>
                <SeedForm/>
            </div>
        </div>
    );
};

export default SellerDashboard;
