import axios from 'axios'
import React, { useState } from 'react'

const UpdateStudent = () => {
    const [name , setName]=useState("")

    const [course , setCorse]=useState("")



    const  updateStudent = async ()=>{
      try {
        const response = await axios.put(`http://localhost:5000/api/students/${id}`,
          {
              id:id,
              name : name,
              course: course
          }
        );

        console.log(response.data);
        alert("Student updated Successfully")

      } catch (err) {
        console.log(err);
        alert("Update failed")
      }
    }

  return (
    <div>
            <input type="text" placeholder='Enter new name' value={name} onChange={(e)=>setName(e.target.value)} />

            <input type="text" placeholder='Enter new course' value={course} onChange={(e)=>setCorse(e.target.value)} />

            <br /><br />

            <button onClick={updateStudent} >Update Student</button>
    </div>
  )
}

export default UpdateStudent
