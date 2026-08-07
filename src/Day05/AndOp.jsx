import React from 'react'

const AndOp = () => {

    const isAdmin = true;

  return (
    <div>
         <h1>Dashboard</h1>
         {
            isAdmin && (
                 <button>Admin Panel</button>
            )
         }
    </div>
  )
}

export default AndOp
