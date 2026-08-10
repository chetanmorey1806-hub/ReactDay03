import axios from 'axios'
import React, { useState } from 'react'

const StudentsGEt = () => {

    const [student1, setStudent1] = useState([])
    
        axios.get("http://localhost:5000/api/students").then((res) => {
            setStudent1(res.data)
        }).catch((err) => {
            console.log(err)
        })
    
    return (
        <div>
            <h1>chetan</h1>
            {
                student1.map((std) => {
                    return (
                        <div key={std.id}>
                            <h3>{std.id}</h3>
                            <h3>{std.name}</h3>
                            <h3>{std.course}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudentsGEt
