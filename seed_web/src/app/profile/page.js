import Image from 'next/image'
import './profile.css'

export default function ProfilePage(){
    return(
        <section>
            <div className="mx-10 py-4 text-center">
                <h1 className="text-3xl font-semibold mb-5">Profile</h1>
            </div>
            
            <div className="justify-center items-center flex flex-wrap gap-6">
                <div>
                <Image src={'/sellerPhoto.png'} width={250} height={200} />
                    
                <button className='text-sm text-center register-btn w-[211px] h-[35px] rounded-[30px] my-4 bg-colorThree border'>EDIT</button>
        

                </div>
                <div>
                    <form>
                        <div className="  text-center">
                            <input className='border rounded' type="text"  id="username"  placeholder="Username"  required/>
                        </div>
                        <div className=" py-2 text-center">
                            <input className="border rounded" type="email" id="email"  placeholder="email"  required/>
                        </div>
                        <div className="text-center">
                            <button className='text-sm text-center register-btn w-[210px] h-[35px] rounded-[30px] my-4 bg-colorThree border'>SAVE</button>
                        </div>
                </form>
               </div>
            </div>
            
        </section>
    )
}