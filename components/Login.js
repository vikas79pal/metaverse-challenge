import React from 'react'
import Image from "next/image"

import { useMoralis } from "react-moralis";



const Login = () => {
    const {authenticate}=useMoralis()
    return (
        <div className='bg-black relative text-white'>
            <h1>I am the login screen</h1>

            <div className='flex flex-col absolute z-50  w-full h-4/6 justify-center items-center
            space-y-8'>
               
                <Image className='object-cover rounded-full' src='/vikas1.jpg'  width={200} height={200}/>
                <button onClick={()=>{authenticate()}} className='bg-yellow-50 text-yellow-400 text-xl p-3 animate-bounce rounded-lg'>Login to METAMASK</button>
            </div>

            <div className='w-full h-screen'>
                {/* image */}
                <Image src="https://links.papareact.com/55n" alt='login bg image  ' objectFit='cover' layout='fill'/>
            </div>
           
        </div>
    )
}

export default Login
