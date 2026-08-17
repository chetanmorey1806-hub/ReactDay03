import React from 'react'

import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
   <div className='bgabout'>
              <div className='w-100 h-75 justify-content-center align-items-center d-flex'>
                  <div className='text-center col-lg-7'>
                       <h1 className='text-white '>Our Portfolio</h1>
                   <p className='text-white'>A curated collection of our most transformative design projects across residential, commercial, and hospitality spaces.</p>
                   {/* <a href=""  ></a> */}
                  <div>
                       <Link to='/' className='text-white text-decoration-none' >Home /</Link>

                       <Link to='/port' className='text-white text-decoration-none' > Portfolio</Link>
                  </div>
                  </div>
              </div>
         </div>
  )
}

export default Portfolio
