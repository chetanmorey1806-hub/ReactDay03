import React from 'react'

const KeyList = () => {

    const students = ["Dhiraj","Bhumika","Vidhya","shraddha","Senha","Nakshtra"]
  return (
    <div>
        <h1>Students</h1>

        <ul>
            {
                students.map((std)=>(
                    <li key={std} >
                        {std}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default KeyList
