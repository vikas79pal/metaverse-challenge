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
               
                <Image className='object-cover rounded-full' src="https://links.papareact.com/3pi"  width={200} height={200}/>
                <button onClick={()=>{authenticate()}} className='bg-yellow-500 p-3 animate-bounce rounded-lg'>Login to METAMASK</button>
            </div>

            <div className='w-full h-screen'>
                {/* image */}
                <Image src="https://links.papareact.com/55n" alt='login bg image  ' objectFit='cover' layout='fill'/>
            </div>
           
        </div>
    )
}

export default Login
