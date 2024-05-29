"use client";
import Link from 'next/link';
import './register.css'
import { use, useState } from 'react';


export default function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = "seller";

    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({username, email, role, password}),
            headers: {
                'content-type': 'applicatioin/json'
            }
        });
        if(response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }
    return(
        <div>
            <div className="login-main-img flex items-center justify-center">
                <h1 className="text-5xl text-white">My Account</h1>
            </div>
            <div className='mx-20 flex flex-wrap justify-evenly my-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl flex items-center mb-5'>REGISTER</h2>
                    {userCreated && (
                        <div className='my-4 text-center'>
                            User created.<br/> Now you can {' '}
                             <Link className='underline' href={'/login'}>Login &raquo;</Link>
                        </div>
                    )}
                    {error && (
                        <div className='my-4 text-center'>
                            Error.<br/>
                            please try again later.
                        </div>
                    )}
                    <form onSubmit={handleFormSubmit}>
                       
                        <div>
                            <label>Username</label> <br/>
                            <input className='border rounded' type="text"  id="username"  placeholder="Username" required
                            disabled={creatingUser}
                            value={username} onChange={ev => setUsername(ev.target.value)}/>
                        </div>
                        <div>
                            <label>Email Address</label> <br/>
                            <input className='border rounded' type="email"  id=""  placeholder="Email" required
                            disabled={creatingUser}
                             value={email} onChange={ev => setEmail(ev.target.value)}/>
                        </div>
                        <div>
                            <label>Password</label> <br/>
                            <input className="border rounded" type="password" id="password"  placeholder="Password"  required
                            disabled={creatingUser}
                             value={password} onChange={ev => setPassword(ev.target.value)}/>
                        </div>

                        <div>
                            <button 
                            type='submit'
                            className="bg-colorThree text-center  w-[300px] h-[50px] py-2 rounded-[30px]"
                            disabled={creatingUser}>REGISTER</button>
                        </div>
                    </form>
                </div>
                <div className='hidden lg:block lg:border-2 mr-6'></div>
                <div className='text-3xl p-5 lg:p-0 flex-1'>
                    <h2 className='text-center mb-5'>LOGIN</h2>
                    <p className='text-sm text-justify'>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                    <div className=' text-center'>
                        <Link href="/login"><button className='text-sm text-center register-btn w-[111px] h-[35px] rounded-[30px] my-4'>LOGIN</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}