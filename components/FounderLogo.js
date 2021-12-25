import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'


const FounderLogo = () => {
    const {user,logout} =useMoralis()
    return (
        <React.Fragment>
            <div>

            <Image className='rounded-full' src='/vikas1.jpg' objectFit='cover' width={80} height={80}/>
            </div>
        </React.Fragment>
    )
}

export default FounderLogo
