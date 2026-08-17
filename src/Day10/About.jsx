import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
         <div className='bgabout'>
              <div className='w-100 h-75 justify-content-center align-items-center d-flex'>
                  <div className='text-center'>
                       <h1 className='text-white '>About Atelier Studio</h1>
                   <p className='text-white'>Discover the story, philosophy, and team behind Miami's  premier interior design <br /> studio.</p>
                   {/* <a href=""  ></a> */}
                  <div>
                       <Link to='/' className='text-white text-decoration-none' >Home /</Link>

                       <Link to='/contact' className='text-white text-decoration-none' > Contact</Link>
                  </div>
                  </div>
              </div>
         </div>
    </div>
  )
}

export default About
