import Head from 'next/head'
import { useState } from 'react'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const {isAuthenticated,logout,user}=useMoralis()

  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  if(!isAuthenticated){
    return   <Login />
  }

  return (
    <div className=''>
      
    <Head>
      <title>Metaverse-Challenge</title>
    </Head>
    <p className='text-black'>logged In! {user.get("username")}</p>
    <button onClick={()=>logout()}>Logout</button>
    
  
    </div>
  )
}
