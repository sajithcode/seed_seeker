import Image from "next/image";

export default function HeroTwo(){
    return(
        <section className=" flex-wrap justify-items-center  items-center flex justify-evenly my-8">
        <div className="flex items-center gap-4 py-3 w-[274px]">
            <div>
                <Image src={'/search.png'} width={60} height={60} />
            </div>
            <div className="">
                <h2 className="font-semibold">INFORMATION</h2>
                <p className="text-gray-500 text-sm">Provide Seed Information</p>
            </div>
        </div>
        <div className="flex items-center gap-4 py-3 w-[274px]">
            <div>
                <Image src={'/service.png'} width={64} height={64} />
            </div>
            <div className="">
                <h2 className="font-semibold">Quality</h2>
                <p className="text-gray-500 text-sm">Best Quality Seed</p>
            </div>
        </div>
        <div className="flex items-center gap-4 py-3 w-[274px]">
            <div>
                <Image src={'/review.png'} width={64} height={64} />
            </div>
            <div className="">
                <h2 className="font-semibold">Review</h2>
                <p className="text-gray-500 text-sm">Make a Decision</p>
            </div>
        </div>
        <div className="flex items-center gap-4 py-3 w-[274px]">
            <div>
                <Image src={'/customer-service.png'} width={64} height={64} />
            </div>
            <div className="">
                <h2 className="font-semibold">Support 24/7</h2>
                <p className="text-gray-500 text-sm">Government Support</p>
            </div>
        </div>
      </section>
    );
}