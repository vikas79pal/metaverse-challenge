import React from 'react'
import { ByMoralis } from 'react-moralis'

const PoweredBy = () => {
    return (
        <div className="my-3">
        <ByMoralis style={{marginLeft:"auto",marginRight:"auto",width:"180px"}} variant="dark" />
      </div>
    )
}

export default PoweredBy
