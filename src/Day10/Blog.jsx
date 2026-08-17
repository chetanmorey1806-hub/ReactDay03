import React from 'react'
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
     <div className='bgabout'>
              <div className='w-100 h-75 justify-content-center align-items-center d-flex'>
                  <div className='text-center col-lg-7'>
                       <h1 className='text-white '>About Atelier StudioDesign Insights & Inspiration</h1>
                   <p className='text-white'>Expert perspectives on interior design trends, tips, and timeless principles.</p>
                   {/* <a href=""  ></a> */}
                  <div>
                       <Link to='/' className='text-white text-decoration-none' >Home /</Link>

                       <Link to='/blog' className='text-white text-decoration-none' > Blog</Link>
                  </div>
                  </div>
              </div>
         </div>
  )
}

export default Blog
