import './test.css'

export default function Login(){
    return(
        <section className=''>
            <div className="login-main-img flex items-center justify-center">
                <h1 className="text-5xl text-white">My Account</h1>
            </div>
            <div className='mx-20 flex flex-wrap justify-evenly my-8'>
                <div>
                    <h2 className='text-3xl flex items-center justify-start mb-5'>LOGIN</h2>
                    <form>
                        <div>
                            <label>Username or email address</label> <br/>
                            <input className='border rounded' type="text"  id="username"  placeholder="Username" required/>
                        </div>
                        <div>
                            <label>Password</label> <br/>
                            <input className="border rounded" type="password" id="password"  placeholder="Password"  required/>
                        </div>

                        <div>
                            <h3 className="bg-colorThree text-center py-2 rounded-[30px]">REGISTER</h3>
                        </div>
                    </form>
                </div>
                <div className='text-3xl p-5 lg:p-0'>
                    <h2>Register</h2>
                </div>
            </div>
        </section>
    );
}