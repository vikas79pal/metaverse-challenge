import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const LogoHeader = () => {
    
    const {user,logout} =useMoralis()
    return (
        <div className=' flex flex-col justify-center items-center'>
            {/* avatar */}
            
<div className='relative bg-black rounded-full border-2 border-pink-400 '>

<Image onClick={()=>{logout()}} className='rounded-full' src={`https://avatars.dicebear.com/api/big-smile/${user.get('username')}.svg`} objectFit='cover' width={100} height={100}/>
</div>
          
            {/* welcome msg */}
            <h3 className='text-gray-400 text-lg'>Welcome to Metaverse Challenge</h3>

            {/* username */}
            <h1 className='text-gray-400 text-4xl '>{user.getUsername()}</h1>

        </div>
    )
}

export default LogoHeader
