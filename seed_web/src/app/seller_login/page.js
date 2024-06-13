"use client";
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SellerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', { email, password, type: 'seller', callbackUrl: '/dashboard' });

        setLoginInProgress(false);
    }

    return (
        <section>
            <div className="login-main-img flex items-center justify-center">
                <h1 className="text-5xl text-white">Seller Login</h1>
            </div>
            <div className='mx-20 flex flex-wrap justify-evenly my-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl flex items-center justify-start mb-5'>LOGIN</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Email address</label> <br/>
                            <input
                                className='border rounded'
                                type="email"
                                id="email"
                                placeholder=""
                                required
                                name='email'
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}
                                disabled={loginInProgress}
                            />
                        </div>
                        <div>
                            <label>Password</label> <br/>
                            <input
                                className="border rounded"
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={ev => setPassword(ev.target.value)}
                                name='password'
                                disabled={loginInProgress}
                            />
                        </div>
                        <div>
                            <button
                                className="bg-colorThree text-center w-[300px] h-[50px] py-2 rounded-[30px]"
                                disabled={loginInProgress}
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
                <div className='hidden lg:block lg:border-2 mr-6'></div>
                <div className='text-3xl p-5 lg:p-0 flex-1'>
                    <h2 className='text-center mb-5'>Register</h2>
                    <p className='text-sm text-justify'>
                        Registering for this site as a seller allows you to access additional features and manage your products. If you don't have a seller account yet, you can Contact
                        your local Agrarian development Center to create an account.
                        Contact your local Agrarian development officer by clicking the button below.
                    </p>
                    <div className='text-center'>
                        <Link href="https://www.agrariandept.gov.lk/web/index.php?option=com_content&view=article&id=64&Itemid=156&lang=en#district-deputy-assistant-commissioners">
                            <button className='text-sm text-center register-btn w-[111px] h-[35px] rounded-[30px] my-4'>
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
