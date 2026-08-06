import React, { useState } from 'react'

const InputField = () => {
   
    const [name , setName]=useState("chetan")

  return (
    <div>
        <h1>Input Demo</h1>

        <input type="text" placeholder='Enter Name' value={name} 
        onChange={(e)=> setName(e.target.value)} />

        {
            console.log(name)
        }
        <h1>{name}</h1>


    </div>
  )
}

export default InputField
