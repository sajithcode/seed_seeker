"use client";
import Link from 'next/link';
import './test.css'
import { useState } from 'react';
import {signIn} from "next-auth/react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);        

        await signIn('credentials', {email, password, callbackUrl: '/shop'});
        
        setLoginInProgress(false);

    }

    return(
        <section className=''>
            <div className="login-main-img flex items-center justify-center">
                <h1 className="text-5xl text-white">My Account</h1>
            </div>
            <div className='mx-20 flex flex-wrap justify-evenly my-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl flex items-center justify-start mb-5'>LOGIN</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Username or email address</label> <br/>
                            <input className='border rounded' 
                            type="text"  id="email"  placeholder="" required
                            name='email'
                            value={email} onChange={ev => setEmail(ev.target.value)}
                            disabled={loginInProgress}/>
                        </div>
                        <div>
                            <label>Password</label> <br/>
                            <input className="border rounded"
                             type="password" id="password"  placeholder="Password"  required
                             value={password} onChange={ev => setPassword(ev.target.value)}
                             name='password'
                             disabled={loginInProgress}/>
                        </div>

                        <div>
                            <button className="bg-colorThree text-center w-[300px] h-[50px] py-2 rounded-[30px]"
                            disabled={loginInProgress}>LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className='hidden lg:block lg:border-2 mr-6'></div>
                <div className='text-3xl p-5 lg:p-0 flex-1'>
                    <h2 className='text-center mb-5'>Register</h2>
                    <p className='text-sm text-justify'>Registering for our service allows you to directly Contact
                    the best seed sellers in Sri Lanka. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                    <div className=' text-center'>
                        <Link href="/register"><button className='text-sm text-center register-btn w-[111px] h-[35px] rounded-[30px] my-4' >REGISTER</button></Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}