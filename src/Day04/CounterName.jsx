import React, { useState } from 'react'

const CounterName = () => {
   
    const [name , setName]=useState("Chetan Morey");

  return (
    <div>
        <h1>Name : </h1>
        <p>{name}</p>

        <button onClick={()=>setName("Reyansh Morey")} >Change Name</button>
    </div>
  )
}

export default CounterName
