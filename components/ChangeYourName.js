import React, { useRef, useState } from 'react'
import { useMoralis } from 'react-moralis'


const ChangeYourName = () => {
    const [isButton, setIsButton] = useState(true)
    const newUsername = useRef("we")
    
    const {setUserData,isUserUpdating}=useMoralis()
    return (
        <div className='bg-slate-800 '>
            {isButton &&

                <button   onClick={()=>setIsButton(!isButton)} className='text-yellow-50 hover:text-cyan-400 outline-none text-sm px-2 animate-pulse'>Change your username</button>
            }
            {
                !isButton  && <div>

                 <input className='bg-fuchsia-900 text-green-500 outline-none px-1' ref={newUsername} onMouseLeave={()=>{
                     console.log(newUsername.current.value);
                 }} />
                 <input className='mx-2 text-red-400' type="submit" onClick={(e)=>{e.preventDefault()
                if (newUsername.current.value.trim().length>1){

                    setUserData({username:newUsername.current.value})  
                    setIsButton(!isButton)
                }}} />
                </div>
            }
        </div>
    )
}

export default ChangeYourName
