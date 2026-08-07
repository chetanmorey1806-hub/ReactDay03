import React from 'react'

const ArrayOfObject = () => {
   
    const students=[
        {
            id : 1, 
            name:"Dhiraj"
        },
        {
            id : 2, 
            name:"Senha"
        },
        {
            id : 3, 
            name:"Vidhya"
        }
    ]

  return (
    <div>
          <h1>Students Info</h1>
          {
           students.map((e)=>(
            <div>
                 <h1>Id : {e.id}</h1>
                 <h1>Name : {e.name}</h1>
            </div>
           ))
          }
    </div>
  )
}

export default ArrayOfObject
