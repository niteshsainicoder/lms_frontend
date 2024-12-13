'use client';
import { Login } from '@/utils/functions/login';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
    const [AdminLogin, setAdminLogin] = useState<boolean>(false)
    const [Email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    const [wait, setwait] = useState<boolean>(false)

    const login = async () => {
        const data = await Login(Email, Password, AdminLogin, setwait);
        localStorage.setItem('user', JSON.stringify(data))
    }

    return (
        <div className='w-full h-full flex items-center justify-center   min-h-screen'>
            <div className={`relative ring ${wait && 'cursor-wait'} bg-neutral-100 rounded-lg ring-neutral-400 shadow-neutral-300 shadow-2xl min-w-[300px] min-h-[350px] md:min-h-[420px] max-h-[420px] w-8/12 md:w-6/12 lg:w-5/12 flex flex-col sm:flex-row  items-center justify-center gap-2 sm:gap-0 sm:justify-around font-semibold`}>
                <h1 className={`absolute top-4 right-2 after:content-['->'] cursor-pointer after:inline-block after:hover:translate-x-1 after:duration-500 after:transition ring-1 ring-neutral-400 bg-neutral-300 px-2 rounded-md    `}
                    onClick={() => { setAdminLogin(!AdminLogin) }}>{AdminLogin ? 'User' : 'Admin'} </h1>

                <div className='flex flex-col items-center max-w-1/2   text-neutral-800'>
                    <h1 className='absolute top-4 left-4  bg-clip-text  bg-gradient-to-r from-cyan-500 to-blue-500 '>
                        <Link href={'/'}>  <span className='text-transparent text-xl'> Acadmically</span></Link>
                    </h1>
                    <Image src={'/login.png'} alt='login' width={50} height={50} className='text-transparent' />
                    <h1 className={`font-bold antialiased text-2xl text-center sm:text-3xl md:text-4xl ${AdminLogin && 'sm:text-2xl md:text-3xl p-0 '} `}>{AdminLogin && 'Admin '}Login</h1>

                </div>
                <div className='flex flex-col items-center  justify-center px-2  gap-6'>
                    <div className=' bg-white px-2 p-1 rounded-md ring ring-slate-300 overflow-hidden  flex hover:ring-blue-400'>

                        <Image src={'/email-svgrepo-com.svg'} alt='login' width={20} height={20} className={'mr-2'} />
                        <input className={` bg-white focus:outline-none `} type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className=' bg-white px-2 p-1 rounded-md ring ring-slate-300 overflow-hidden  flex hover:ring-blue-400'>
                        <Image src={'/password-svgrepo-com.svg'} alt='login' width={20} height={20} className={'mr-2'} />
                        <input className='placeholder:italic focus:outline-none' type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <p onClick={() => login()} className='px-3 p-[2px] cursor-pointer rounded-md hover:ring-cyan-400 focus:outline-none ring transition-colors ring-slate-300 focus:ring-cyan-300 bg-stone-100'> Login</p>
                </div>
            </div>
        </div>
    )
}

export default page
