import React, { useState } from 'react'

const OnSubmit = () => {

    const [name , setName]=useState("");

    const handSumit =(e)=>{
       e.preventDefault();

       alert(`Hello : ${name}`)
    }

  return (
    <div>
        <form onSubmit={handSumit} action="">
              <input type="text" placeholder='Enter Your name' value={name} onChange={(e)=> setName(e.target.value)}    />

              <button type='submit'>Submit Form</button>
        </form>
    </div>
  )
}

export default OnSubmit
