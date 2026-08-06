import React from 'react'

const SimpleDemo = () => {

    const handleClick =()=>{
        alert("Button Click")
    }

  return (
    <div>
        <button onClick={handleClick} >Click me</button>
    </div>
  )
}

export default SimpleDemo
