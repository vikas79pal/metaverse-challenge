import React from 'react'
import ChangeYourName from './ChangeYourName'
import FounderLogo from './FounderLogo'
import LogoHeader from './LogoHeader'

const Header = () => {
    return (
        <div className=' flex flex-row mx-4 justify-between border-b-2 border-pink-300  w-5/5 h-1/3 bg-zinc-900'>

            <div className='w-2/12   flex flex-row justify-center items-center'><FounderLogo/></div>
            <div className='w-3/12   flex flex-col justify-center items-start'><LogoHeader/></div>
            <div className='m-2'><ChangeYourName/></div>
            
        </div>
    )
}

export default Header
