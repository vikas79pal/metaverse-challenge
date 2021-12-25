import Image from 'next/image'
import React from 'react'

const Avatar = ({avatar}) => {
    return (
        <React.Fragment>

        <Image  className='rounded-full' src={`https://avatars.dicebear.com/api/big-smile/${avatar}.svg`} objectFit='cover' width={25} height={25}/>
        </React.Fragment>
    )
}

export default Avatar
