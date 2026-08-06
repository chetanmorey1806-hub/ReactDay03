import React, { useState } from 'react'

const DemoMode = () => {

    const [isno , setIsOn]=useState(false
        
    )
  return (
    <div>
         <h1>Mode : {isno ? "Light On" : "Light off" }</h1>
          
          <button onClick={()=>setIsOn(!isno)} >Toggle</button>
    </div>
  )
}

export default DemoMode
